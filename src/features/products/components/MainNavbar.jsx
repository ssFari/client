import { Slant as Hamburger } from 'hamburger-react';
import { BiDollarCircle } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { UlLink, UlPrimaryButton } from '../../../utils/utils';
import { routesNavbar } from '../routes/Routes';
import useHandleClick from '../../../hooks/useHandleClick';
import { LogIn } from 'lucide-react';
import React, { useRef, useCallback } from 'react'; // Import useCallback

const MainNavbar = () => {
    const navLinkRef = useRef(null);
    const hamburgerRef = useRef(null);
    // Menggunakan useHandleClick global, refs: [navLinkRef, hamburgerRef], closeOnInsideClick: false
    // Perhatikan bahwa setOpen dari useHandleClick sudah stabil, namun membungkus handler lain dengan useCallback adalah praktik baik
    const { isOpen, setOpen } = useHandleClick([navLinkRef, hamburgerRef]); // setOpen sekarang berasal dari useHandleClick

    // Menggunakan useCallback untuk memastikan fungsi ini stabil di seluruh render
    const handleToggleMenu = useCallback(() => {
        setOpen((prev) => !prev);
    }, [setOpen]); // setOpen adalah dependensi, meskipun useHandleClick sudah menstabilkannya

    const handleLinkClick = useCallback(() => {
        setOpen(false); // Selalu tutup menu saat link diklik
    }, [setOpen]);

    const location = useLocation();
    return (
        <nav className='absolute top-0 left-0 right-0 z-50 max-md:dark:bg-gray-950 max-md:bg-gray-50'>
            <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='w-full flex flex-row justify-between items-center gap-7 py-6'>
                    <Link
                        to='/'
                        className='flex items-center justify-center gap-2'
                        onClick={handleLinkClick} // Tutup menu saat klik logo
                    >
                        <div className='flex items-center justify-center gap-2'>
                            <BiDollarCircle className='bg-blue-500 text-3xl text-white rounded-full' />
                            <span className='text-lg font-inter font-bold'>
                                Wealthy
                            </span>
                        </div>
                    </Link>

                    <div className='md:hidden' ref={hamburgerRef}>
                        <Hamburger
                            toggled={isOpen}
                            size={25}
                            toggle={handleToggleMenu}
                        />
                    </div>
                    {/* Desktop Navigation */}

                    <div className='hidden md:flex flex-row lg:gap-11 gap-6 items-center'>
                        <ul className='flex flex-row lg:gap-11 gap-6 items-center'>
                            {routesNavbar.slice(0, 4).map((route) => {
                                const isActive =
                                    location.pathname === route.href;
                                return (
                                    <UlLink key={route.title} to={route.href}>
                                        <span
                                            className={
                                                isActive ? 'font-semibold' : ''
                                            }
                                        >
                                            {route.title}
                                        </span>
                                    </UlLink>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='md:flex flex-row justify-between py-0 translate-y-0 items-center hidden'>
                        <ul className='flex flex-row gap-6 items-center'>
                            <UlPrimaryButton to='/auth/login'>
                                <div className='flex items-center justify-center gap-2'>
                                    <LogIn
                                        className='max-lg:inline text-base'
                                        size={20}
                                    />
                                    <span className='max-lg:hidden inline'>
                                        Login
                                    </span>
                                </div>
                            </UlPrimaryButton>
                        </ul>
                    </div>
                    {/* Mobile Navigation */}
                    <div
                        ref={navLinkRef}
                        id='navLink'
                        className={`w-full flex absolute top-full left-0 right-0 flex-col gap-y-6 py-4 -z-10 transition-all dark:bg-gray-950 bg-gray-50 duration-500 md:hidden ${!isOpen ? 'ease-in translate-y-[-150%]' : 'ease-out translate-y-0'}`}
                    >
                        <ul className='flex flex-col gap-6 items-center'>
                            {routesNavbar.slice(0, 4).map((route) => {
                                const isActive =
                                    location.pathname === route.href;
                                return (
                                    <UlLink
                                        key={route.title}
                                        to={route.href}
                                        onClick={handleLinkClick} // Menggunakan handleLinkClick
                                    >
                                        <span
                                            className={
                                                isActive ? 'font-semibold' : ''
                                            }
                                        >
                                            {route.title}
                                        </span>
                                    </UlLink>
                                );
                            })}
                        </ul>
                        <ul className='flex flex-col gap-6 items-center'>
                            {routesNavbar.slice(4).map((route) => (
                                <UlLink
                                    key={route.title}
                                    to={route.href}
                                    onClick={handleLinkClick} // Menggunakan handleLinkClick
                                >
                                    <span>{route.title}</span>
                                </UlLink>
                            ))}
                            <UlPrimaryButton
                                to='/auth/login'
                                onClick={handleLinkClick} // Menggunakan handleLinkClick
                            >
                                <div className='flex items-center justify-center gap-2'>
                                    <LogIn size={20} />
                                    Login
                                </div>
                            </UlPrimaryButton>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default React.memo(MainNavbar);
