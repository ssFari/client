import { motion } from 'framer-motion';
import MouseSVG from '../../../assets/svg/MouseSVG';

const Section = ({ className, id, children, underCross }) => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section
            className={`relative w-full h-full flex flex-col mb-5 ${className} `}
            id={id}
        >
            <div className='flex flex-col items-center justify-center gap-6'>
                {children}
            </div>
            {underCross && (
                <div className='relative w-full flex items-center my-6'>
                    <div className='flex-grow border-t border-gray-300 dark:border-gray-700'></div>
                    <span className='cursor-pointer px-2'>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, type: 'spring' }}
                            whileHover={{
                                scale: 1.08,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.96 }}
                            className='w-full h-full flex items-center justify-center focus:outline-none cursor-pointer'
                            onClick={handleScrollTop}
                            aria-label='Kembali ke atas'
                        >
                            <MouseSVG />
                        </motion.button>
                    </span>
                    <div className='flex-grow border-t border-gray-300 dark:border-gray-700'></div>
                </div>
            )}
        </section>
    );
};

export default Section;
