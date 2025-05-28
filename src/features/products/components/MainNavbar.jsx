import { Slant as Hamburger } from 'hamburger-react';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { UlLink, UlPrimaryButton } from '../../../utils/utils';
import { routesNavbar } from '../routes/Routes';
import useHandleClick from '../../../hooks/useHandleClick';
import { LogIn } from 'lucide-react';
import { useRef } from 'react';

const MainNavbar = () => {
    // Gunakan useHandleClick global, refs: [navLinkRef, hamburgerRef], closeOnInsideClick: false
    const navLinkRef = useRef(null);
    const hamburgerRef = useRef(null);
    const { isOpen, setOpen, handleMenuClick } = useHandleClick(
        [navLinkRef, hamburgerRef],
        false,
    );
    return (
        <nav className='absolute top-0 left-0 right-0 z-50 max-md:dark:bg-gray-950 max-md:bg-gray-50'>
            <div className='relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-row justify-between md:justify-start items-center gap-7 py-6'>
                    <Link
                        to='/'
                        className='flex items-center justify-center gap-2'
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
                            toggle={setOpen}
                        />
                    </div>
                    <div
                        className={`w-full md:flex flex-row justify-between py-0 translate-y-0 items-center hidden`}
                    >
                        <ul className='flex flex-row lg:gap-11 gap-6 items-center'>
                            {routesNavbar.slice(0, 4).map((route) => (
                                <UlLink key={route.title} to={route.href}>
                                    <span>{route.title}</span>
                                </UlLink>
                            ))}
                        </ul>
                        <ul className='flex flex-row gap-6 items-center'>
                            {routesNavbar.slice(4).map((route) => (
                                <UlLink key={route.title} to={route.href}>
                                    <span>{route.title}</span>
                                </UlLink>
                            ))}
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
                    <div
                        ref={navLinkRef}
                        id='navLink'
                        className={`w-full flex absolute top-full left-0 right-0 flex-col gap-y-6 py-4 -z-10 transition-all dark:bg-gray-950 bg-gray-50 duration-500 md:hidden ${!isOpen ? 'ease-in translate-y-[-150%]' : 'ease-out translate-y-0'}`}
                    >
                        <ul className='flex flex-col gap-6 items-center'>
                            {routesNavbar.slice(0, 4).map((route) => (
                                <UlLink
                                    key={route.title}
                                    to={route.href}
                                    onClick={handleMenuClick}
                                >
                                    <span>{route.title}</span>
                                </UlLink>
                            ))}
                        </ul>
                        <ul className='flex flex-col gap-6 items-center'>
                            {routesNavbar.slice(4).map((route) => (
                                <UlLink
                                    key={route.title}
                                    to={route.href}
                                    onClick={handleMenuClick}
                                >
                                    <span>{route.title}</span>
                                </UlLink>
                            ))}
                            <UlPrimaryButton
                                to='/auth/login'
                                onClick={handleMenuClick}
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

export default MainNavbar;
