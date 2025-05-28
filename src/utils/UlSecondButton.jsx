import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa6';

const UlSecondButton = ({ to, children, className, ...props }) => {
    const defaultClassName = 'bg-transparent border border-gray-900';
    const combinedClassName = className || defaultClassName;

    return (
        <Link
            to={to}
            className={`${combinedClassName} relative flex flex-row items-center gap-4 w-max font-semibold p-2 rounded-full group`}
            {...props}
        >
            <p className='relative z-10 pl-3'>{children}</p>
            <div className='pt-0.5 w-8 h-8 flex flex-row justify-center items-center before:content-[""] before:absolute before:top-0 before:right-0 before:bg-gray-200 dark:before:bg-gray-800  bg-opacity-50 group-hover:before:w-[calc(100%-16px)] before:w-8 hover: before:duration-300 ease-in-out before:m-2 before:h-8 before:rounded-full before:z-0 pb-0.5'>
                <div className='relative z-10 flex flex-row justify-center items-center w-6 h-8 overflow-hidden rounded-full'>
                    <FaArrowRight className='absolute translate-x-[-150%] group-hover:animate-[fadeIn_0.4s_ease-out_forwards]' />
                    <FaArrowRight className='absolute group-hover:animate-[fadeOut_0.4s_ease-in_forwards]' />
                </div>
            </div>
        </Link>
    );
};
UlSecondButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default UlSecondButton;
