import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UlPrimaryButton = ({ to, children, className, ...props }) => {
    const defaultClassName = 'bg-blue-600';
    const combinedClassName = className || defaultClassName;

    return (
        <Link
            to={to}
            className={`${combinedClassName} relative w-max text-white text-center text-base font-semibold py-3 px-4 rounded-full before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-300 before:opacity-0 before:rounded-full hover:before:opacity-30 hover:before:transition-opacity before:duration-300 hover:before:duration-300 hover:before:ease-in-out`}
            {...props}
        >
            {children}
        </Link>
    );
};
UlPrimaryButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default UlPrimaryButton;
