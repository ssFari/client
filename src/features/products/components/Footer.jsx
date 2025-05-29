import {
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { routesNavbar } from '../routes/Routes';

const Footer = () => {
    return (
        <footer className='w-full py-10 px-4 bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-gray-400 text-sm'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
                {/* Company Info */}
                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-lg text-gray-700 dark:text-gray-200 mb-2'>
                        Wealthy
                    </span>
                    <p className='text-xs'>
                        Wealthy helps you manage your finances easily, securely,
                        and efficiently. Your trusted financial partner.
                    </p>
                </div>
                {/* Quick Links */}
                <div>
                    <span className='font-semibold text-gray-700 dark:text-gray-200 mb-2 block'>
                        Quick Links
                    </span>
                    <ul className='flex flex-col gap-1'>
                        {routesNavbar.map((route) => (
                            <li key={route.title}>
                                <Link
                                    to={route.href}
                                    className='hover:underline'
                                >
                                    {route.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Contact Info */}
                <div>
                    <span className='font-semibold text-gray-700 dark:text-gray-200 mb-2 block'>
                        Contact
                    </span>
                    <ul className='flex flex-col gap-2 text-xs'>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope />{' '}
                            <Link
                                to
                                href='mailto:info@wealthy.com'
                                className='hover:underline'
                            >
                                info@wealthy.com
                            </Link>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhone />{' '}
                            <Link
                                to
                                href='tel:+62123456789'
                                className='hover:underline'
                            >
                                +62 123-456-789
                            </Link>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaMapMarkerAlt /> Jl. Contoh No. 123, Jakarta,
                            Indonesia
                        </li>
                    </ul>
                </div>
                {/* Newsletter */}
                <div>
                    <span className='font-semibold text-gray-700 dark:text-gray-200 mb-2 block'>
                        Newsletter
                    </span>
                    <form className='flex flex-col gap-2'>
                        <input
                            type='email'
                            placeholder='Your email address'
                            className='rounded px-3 py-2 border text-sm bg-white dark:bg-gray-900'
                            disabled
                        />
                        <button
                            type='submit'
                            className='bg-blue-600 text-white rounded px-3 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors'
                            disabled
                        >
                            Subscribe (Coming Soon)
                        </button>
                    </form>
                    <span className='text-xs text-gray-400 mt-1 block'>
                        * Newsletter feature coming soon.
                    </span>
                </div>
            </div>
            {/* Social & Legal */}
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-4'>
                    <Link
                        to='https://www.instagram.com/_luthfi_punya/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Instagram'
                        className='hover:text-pink-500 transition-colors'
                    >
                        <FaInstagram size={22} />
                    </Link>
                    <Link
                        to='https://linkedin.com/company/wealthy'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                        className='hover:text-blue-700 transition-colors'
                    >
                        <FaLinkedin size={22} />
                    </Link>
                    <Link
                        to
                        href='https://twitter.com/wealthy'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Twitter'
                        className='hover:text-blue-400 transition-colors'
                    >
                        <FaTwitter size={22} />
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-2 text-xs'>
                    <Link to='/privacy' className='hover:underline'>
                        Privacy Policy
                    </Link>
                    <span className='hidden md:inline'>|</span>
                    <Link to='/terms' className='hover:underline'>
                        Terms of Service
                    </Link>
                    <span className='hidden md:inline'>|</span>
                    <span>
                        © {new Date().getFullYear()} Wealthy. All rights
                        reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
