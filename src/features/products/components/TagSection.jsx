import React from 'react';

const TagSection = ({ tag1, title, description, className, ...props }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`} {...props}>
            <span className='w-max font-bold tracking-tighter bg-blue-200 text-[12px] px-2 py-1 rounded-2xl text-blue-500 dark:text-blue-400 dark:bg-blue-800/35 mb-2'>
                {tag1}
            </span>
            <h2 className='font-bold text-4xl tracking-tighter'>{title}</h2>
            <p className='text-base text-gray-700 dark:text-gray-400'>
                {description}
            </p>
        </div>
    );
};

export default TagSection;
