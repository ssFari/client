import { motion } from 'framer-motion';

const MouseSVG = () => (
    <svg
        width='32'
        height='48'
        viewBox='0 0 32 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        {/* Light mode */}
        <rect
            x='4'
            y='4'
            width='24'
            height='40'
            rx='12'
            strokeWidth='1.5'
            className='transparant stroke-gray-300 dark:stroke-gray-700'
            fillOpacity='0.7'
        />
        <motion.rect
            x='14'
            y='10'
            width='4'
            height='8'
            rx='2'
            className='dark:fill-gray-600 fill-gray-200'
            animate={{
                y: [0, 20, 0],
            }}
            transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    </svg>
);

export default MouseSVG;
