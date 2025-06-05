import PropTypes from 'prop-types'; // Import PropTypes

const TagSection = ({ tag1, title, description, className, ...props }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`} {...props}>
            <span className='w-max font-bold tracking-tighter  text-[12px] px-2 py-1 rounded-2xl bg-blue-200 text-blue-500 dark:text-blue-400 dark:bg-blue-800/35 mb-2'>
                {tag1}
            </span>
            <h2 className='font-bold text-4xl tracking-tighter'>
                {' '}
                {/* Tambahkan warna teks */}
                {title}
            </h2>
            <p className='text-base dark:text-white/70 text-black/80'>
                {description}
            </p>
        </div>
    );
};

// Menambahkan PropTypes untuk validasi props
TagSection.propTypes = {
    tag1: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default TagSection;
