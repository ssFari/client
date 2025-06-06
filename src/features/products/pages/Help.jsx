import React from 'react';
import Card from '../../../components/Card';
import {
    FaRegQuestionCircle,
    FaChevronDown,
    FaChevronUp,
    FaEnvelopeOpenText,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import UlPrimaryButton from '../../../utils/UlPrimaryButton';
import DropDown from '../../../utils/DropDown';
import { useDropdownSet } from '../../../hooks/customHooks';
import { faqData } from '../routes/Routes';

const Help = () => {
    const [openIndices, handleDropdown] = useDropdownSet();

    return (
        <div className='flex flex-col min-h-[calc(100vh-290px)] pt-36 pb-10'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className='flex flex-col items-center w-full'
            >
                <Card className='bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-xl text-center border border-blue-100 dark:border-blue-700'>
                    <div className='flex flex-col items-center mb-6'>
                        <FaRegQuestionCircle className='text-blue-500 text-5xl mb-2 animate-bounce' />
                        <h1 className='text-3xl font-bold mb-2 text-gray-800 dark:text-white tracking-tight'>
                            Help & Support
                        </h1>
                        <p className='text-gray-600 dark:text-gray-300 mb-2 text-base'>
                            Welcome to our Help Center! Find answers to your
                            questions and guides to use our platform.
                        </p>
                    </div>
                    <div className='mt-6 text-left'>
                        <h2 className='text-xl font-semibold text-blue-500 mb-3 flex items-center gap-2'>
                            <FaRegQuestionCircle className='inline-block' />{' '}
                            Frequently Asked Questions
                        </h2>
                        <div className='space-y-3'>
                            {faqData.slice(-3).map((faq, idx) => (
                                <DropDown
                                    key={idx}
                                    title={faq.question}
                                    description={faq.answer}
                                    open={openIndices.has(idx)}
                                    setOpen={(val) => handleDropdown(idx)}
                                />
                            ))}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='mt-10 flex flex-col items-center space-y-3'
                    >
                        <UlPrimaryButton
                            to='/contact-us'
                            className='flex flex-row gap-2 items-center bg-blue-600 hover:bg-blue-700'
                        >
                            <FaEnvelopeOpenText className='text-lg' />
                            Contact Us
                        </UlPrimaryButton>
                        <p className='text-gray-500 dark:text-gray-400 mt-3 text-xs'>
                            Still need help? Our support team is ready to assist
                            you.
                        </p>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
};

export default Help;
