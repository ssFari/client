import PropTypes from 'prop-types';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useCallback, useState } from 'react';
import useHandleClick from '../hooks/useHandleClick';

const DropDown = ({ title, description, open, setOpen }) => {
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const [lastClickTime, setLastClickTime] = useState(0);

    // Custom hook untuk mendeteksi klik di luar dropdown
    useHandleClick(open ? [dropdownRef] : [], () => setOpen(false));

    // Fungsi untuk menangani toggle dropdown
    const handleToggle = useCallback(
        (event) => {
            // Cegah double klik dengan memeriksa waktu sejak klik terakhir
            const now = Date.now();
            if (now - lastClickTime < 50) {
                return; // Jika double klik, abaikan
            }
            setLastClickTime(now);

            // Toggle state open
            setOpen((prev) => !prev);
        },
        [lastClickTime, setOpen],
    );

    return (
        <motion.div
            ref={dropdownRef}
            className='w-full rounded-[10px] bg-gray-200 dark:bg-gray-900 cursor-pointer'
            onClick={handleToggle}
            aria-expanded={open}
            tabIndex={0}
            initial={{ height: '52px', opacity: 1 }}
            animate={{
                height: open ? 'auto' : '52px',
                opacity: 1,
            }}
            exit={{ height: '52px', opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                opacity: { duration: 0.2 },
            }}
            style={{ willChange: 'height, opacity' }}
        >
            <div
                ref={buttonRef}
                className='w-full text-left flex justify-between items-center py-3 px-4 focus:outline-none cursor-pointer'
                onClick={(e) => {
                    e.stopPropagation(); // Mencegah event bubbling dari tombol
                    handleToggle(e); // Panggil handleToggle secara langsung
                }}
            >
                <span className='text-lg font-semibold text-gray-900 dark:text-white'>
                    {title}
                </span>
                <span
                    className={`ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    style={{ willChange: 'transform' }}
                >
                    {open ? (
                        <Minus
                            size={20}
                            className='text-gray-400 dark:text-white'
                            color='#fff'
                        />
                    ) : (
                        <Plus
                            size={20}
                            className='text-gray-400 dark:text-white'
                            color='#fff'
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
                            opacity: {
                                duration: 0.2,
                                ease: 'easeInOut',
                            },
                            y: {
                                type: 'spring',
                                stiffness: 200,
                                damping: 20,
                            },
                            height: {
                                duration: 0.3,
                            },
                        }}
                        className='overflow-hidden'
                        style={{ willChange: 'height, opacity' }}
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

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default DropDown;
