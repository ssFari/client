import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UlLinkScd = ({ to, children, className, ...props }) => {
    const defaultClassName = 'dark:text-white text-black';
    const combinedClassName = className
        ? `${defaultClassName} ${className}`
        : defaultClassName; // Menggabungkan className dengan benar

    return (
        <Link
            to={to}
            className={`${combinedClassName} relative text-sm tracking-tighter flex items-center justify-center gap-2 hover:opacity-80 transition-opacity duration-300 ease-in-out before:content-[""] before:absolute before:top-[100%] before:left-[50%] before:mt-[5px] before:translate-x-[-50%] before:w-[40%] hover:before:w-[80%] before:duration-300 before:h-[2px] dark:before:bg-gray-200 before:bg-gray-800`}
            {...props}
        >
            {children}
        </Link>
    );
};

// Menambahkan PropTypes untuk validasi props
UlLinkScd.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default UlLinkScd;
