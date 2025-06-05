import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import UlPrimaryButton from '../../../utils/UlPrimaryButton';

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);
targetDate.setHours(targetDate.getHours() + 7);
targetDate.setMinutes(targetDate.getMinutes() + 13);
targetDate.setSeconds(targetDate.getSeconds() + 22);

function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
}

const ComingSoonLayout = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='h-full min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className='flex flex-col items-center w-full max-w-xl'
            >
                <h1 className='text-5xl md:text-7xl font-extrabold text-center text-gray-900 dark:text-white mb-4'>
                    Coming Soon
                </h1>
                <div className='w-16 h-1 bg-blue-500 rounded-full mb-8 opacity-70' />
                <div className='flex gap-3 md:gap-6 mb-6'>
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds },
                    ].map((item) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-lg rounded-xl px-4 py-2 min-w-[56px] border border-gray-100 dark:border-gray-800'
                        >
                            <span className='text-blue-600 dark:text-blue-300 text-2xl md:text-3xl font-bold font-mono tracking-wider'>
                                {String(item.value).padStart(2, '0')}
                            </span>
                            <span className='text-[10px] md:text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-widest mt-1'>
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
                <div className='w-full flex justify-center mb-6'>
                    <div className='w-full max-w-xs h-px bg-gray-200 dark:bg-gray-800' />
                </div>
                <p className='text-gray-500 dark:text-gray-400 text-center max-w-md mb-8 text-base md:text-lg font-sm'>
                    Fitur baru Wealthy segera hadir. Kami sedang menyiapkan
                    sesuatu yang spesial untukmu.
                </p>
                <UlPrimaryButton>
                    <div className='flex items-center gap-2'>
                        <FiMail className='text-lg' />
                        <span>Subscribe</span>
                    </div>
                </UlPrimaryButton>
            </motion.div>
        </div>
    );
};

export default ComingSoonLayout;
