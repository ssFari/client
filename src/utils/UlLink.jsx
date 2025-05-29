import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UlLink = ({ to, children, className, ...props }) => {
    const defaultClassName = 'text-black dark:text-white font-light';
    const combinedClassName = className
        ? `${defaultClassName} ${className}`
        : defaultClassName; // Menggabungkan className dengan benar

    return (
        <Link
            to={to}
            className={`${combinedClassName} relative text-center transition-all duration-[250ms] ease-in hover:opacity-80 hover:translate-y-[.04rem]`}
            {...props}
        >
            {children}
        </Link>
    );
};

// Menambahkan PropTypes untuk validasi props
UlLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default UlLink;
