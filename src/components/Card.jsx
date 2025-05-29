import PropTypes from 'prop-types'; // Import PropTypes

const Card = ({ className, children, title, icon, paragraph, ...props }) => {
    return (
        <div
            className={`backdrop-blur-md bg-white/30 dark:bg-gray-900/60 shadow dark:shadow-blue-900/30 rounded-2xl p-6 ${className}`}
            {...props}
        >
            <div className='relative w-full h-full bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 shadow flex flex-col gap-4'>
                <div className='flex items-center gap-3'>
                    <span className='bg-blue-200 text-blue-500 dark:text-blue-400 dark:bg-blue-800/35 p-1 rounded-sm'>
                        {icon}
                    </span>
                    <h3 className='font-semibold'>{title}</h3>
                </div>
                {/* Tampilkan paragraf hanya jika ada isinya */}
                {paragraph && (
                    <p className='text-gray-700 dark:text-gray-400'>
                        {paragraph}
                    </p>
                )}
                {children}
            </div>
        </div>
    );
};

// Menambahkan PropTypes untuk validasi props
Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node, // Children bisa berupa elemen React atau lainnya
    title: PropTypes.string.isRequired, // Title wajib ada
    icon: PropTypes.node, // Icon bisa berupa elemen React
    paragraph: PropTypes.string,
};

export default Card;
