import React from 'react';
import Card from '../../../components/Card';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SubmitButton from '../../../utils/SubmitButton';

const ContactUs = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-290px)] pt-36'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className='flex flex-col items-center w-full'
            >
                <Card className='bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-xl text-center border border-blue-100 dark:border-gray-700'>
                    <div className='flex flex-col items-center mb-6'>
                        <FaEnvelopeOpenText className='text-blue-500 text-5xl mb-2 animate-bounce' />
                        <h1 className='text-3xl font-bold mb-2 text-gray-800 dark:text-white tracking-tight'>
                            Contact Us
                        </h1>
                        <p className='text-gray-600 dark:text-gray-300 mb-2 text-base'>
                            Have questions, feedback, or need support? Fill out
                            the form below and our team will get back to you as
                            soon as possible.
                        </p>
                    </div>
                    <form className='flex flex-col gap-4 mt-4'>
                        <input
                            type='text'
                            placeholder='Your Name'
                            className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400'
                            required
                        />
                        <input
                            type='email'
                            placeholder='Your Email'
                            className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400'
                            required
                        />
                        <textarea
                            placeholder='Your Message'
                            rows={5}
                            className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400'
                            required
                        />
                        <SubmitButton type='submit'>Send Message</SubmitButton>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
};

export default ContactUs;
