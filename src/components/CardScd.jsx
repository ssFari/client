import { Star } from 'lucide-react';

const CardScd = ({ name, occupation, photo, message, rating }) => {
    return (
        <div className='bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow p-5 flex flex-col gap-3 w-full max-w-xs min-w-[220px] border border-gray-100 dark:border-gray-800'>
            <div className='flex items-center gap-3'>
                <img
                    src={photo}
                    alt={name}
                    className='w-12 h-12 rounded-full object-cover border border-indigo-100 dark:border-indigo-900'
                />
                <div>
                    <div className='font-semibold text-gray-900 dark:text-white text-sm'>
                        {name}
                    </div>
                    <div className='text-xs text-gray-500 dark:text-gray-400'>
                        {occupation}
                    </div>
                </div>
            </div>
            <div className='text-gray-700 dark:text-gray-300 text-sm italic'>
                "{message}"
            </div>
            <div className='flex items-center gap-1 mt-1'>
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        className={
                            i < rating
                                ? 'text-yellow-400 fill-yellow-300'
                                : 'text-gray-300'
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default CardScd;
