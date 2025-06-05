import PropTypes from 'prop-types';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useCallback } from 'react'; // Tambahkan useCallback
import useHandleClick from '../hooks/useHandleClick';

const DropDown = ({ title, description, open, setOpen }) => {
    const dropdownRef = useRef(null);

    // Menggunakan custom hook untuk mendeteksi klik di luar dropdown
    // Jika dropdown terbuka dan ada klik di luar dropdownRef, panggil setOpen(false)
    useHandleClick(open ? [dropdownRef] : [], () => setOpen(false));

    // Menggunakan useCallback untuk fungsi toggle agar stabil
    const handleToggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, [setOpen]); // setOpen adalah dependensi karena berasal dari prop

    return (
        <motion.div
            ref={dropdownRef}
            className='w-full rounded-[10px] bg-gray-200 dark:bg-gray-900 cursor-pointer'
            onClick={handleToggle} // Menggunakan fungsi handleToggle yang stabil
            aria-expanded={open}
            tabIndex={0}
            initial={{ height: 'auto', opacity: 1 }}
            animate={{
                height: open ? '100%' : 'auto',
                opacity: 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
            }}
        >
            <div className='w-full text-left flex justify-between items-center py-3 px-4 focus:outline-none cursor-pointer'>
                <span className='text-lg font-semibold text-gray-900 dark:text-white'>
                    {title}
                </span>
                <span
                    className={`ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                >
                    {open ? (
                        <Minus
                            size={20}
                            className='text-gray-400 dark:text-white' // Tambahkan dark mode color
                            color='#fff' // Ini mungkin tidak efektif jika di-override oleh className
                        />
                    ) : (
                        <Plus
                            size={20}
                            className='text-gray-400 dark:text-white' // Tambahkan dark mode color
                            color='#fff' // Ini mungkin tidak efektif jika di-override oleh className
                        />
                    )}
                </span>
            </div>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key='dropdown-content'
                        layout
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 0 }}
                        transition={{
                            opacity: { duration: 0.2, ease: 'easeInOut' },
                            y: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 20,
                            },
                        }}
                        className='overflow-hidden'
                    >
                        <div className='px-4 pb-4 dark:text-white/70 text-black/80'>
                            <p className='text-sm'>{description}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// PropTypes untuk validasi props
DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default DropDown;
