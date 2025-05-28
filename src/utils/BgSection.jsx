import BgSectionSVG from '../assets/svg/BgSectionSVG';
import AnimatedInfoCard from '../components/AnimatedInfoCard';
import { DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const BgSection = ({ animated = false, className = '', ...props }) => {
    return (
        <div
            className={`absolute -z-10 pointer-events-none w-full h-full flex items-center justify-center ${className}`}
            {...props}
            aria-hidden='true'
        >
            <BgSectionSVG className='w-full h-full object-fit' />
            {animated && (
                <>
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                            delay: 0,
                        }}
                        className='lg:absolute hidden lg:block top-4/12 left-[10%] z-10 '
                    >
                        <AnimatedInfoCard
                            value='$12,580'
                            percent={4.6}
                            label='Total Balance'
                            icon={<DollarSign size={20} />}
                            color='#6366f1'
                        />
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                            duration: 4.5,
                        }}
                        className='lg:absolute hidden lg:block top-12/12 right-[10%] z-10 '
                    >
                        <AnimatedInfoCard
                            value='$3,580'
                            percent={2.6}
                            label='Monthly Expenses'
                            icon={<DollarSign size={20} />}
                            txColor={'text-red-400'}
                            iconColor='bg-red-200 text-red-500 dark:text-red-400 dark:bg-red-800/35'
                        />
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default BgSection;
