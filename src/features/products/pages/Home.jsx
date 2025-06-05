// src/features/products/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCircleInfo } from 'react-icons/fa6';
import {
    UlLinkScd,
    UlSecondButton,
    UlPrimaryButton,
    BgGrid,
    BgSection,
} from '../../../utils/utils';
import { Section, TagSection } from '../components/componentsAll';
import hero from '../../../assets/img/hero.png';
import { Card, CardScd } from '../../../components/componentAll';
import {
    useHandleMouseMove,
    useStickyScrollItem,
} from '../../../hooks/customHooks';
import {
    faqData,
    routesFeatures,
    stepsHowItWorks,
    testimonials,
} from '../routes/Routes';
import { Award, BadgeDollarSign, Check } from 'lucide-react';
import DropDown from '../../../utils/DropDown';
import useMotionAnimation from '../../../hooks/useMotionAnimation';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { bg1X, bg1Y, bg2X, bg2Y, bg3X, bg3Y } = useHandleMouseMove();
    const { tagY, featureRef, isLgUp } = useStickyScrollItem();
    const [openIndices, setOpenIndices] = useState(new Set());

    const handleDropdown = (idx) => {
        setOpenIndices((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(idx)) {
                newSet.delete(idx);
            } else {
                newSet.add(idx);
            }
            return newSet;
        });
    };

    const { fadeUp, fadeIn, stagger } = useMotionAnimation();

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollId = params.get('scroll');
        if (scrollId) {
            const section = document.getElementById(scrollId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return (
        <div className='relative w-full h-max'>
            {/* Hero Section */}
            <div className='w-full h-max bg-transparent absolute z-[1] flex items-center justify-center'>
                <div className='w-full h-full relative overflow-hidden'>
                    <motion.div
                        className='w-full h-full absolute'
                        style={{ x: bg3X, y: bg3Y }}
                    >
                        <BgGrid />
                    </motion.div>
                    <div className='w-full h-full flex justify-center pt-[200px] md:pt-[288px] custom-bg dark:after:opacity-[.7] after:opacity-[.4] after:bg-gray-50 dark:after:bg-gray-950' />
                </div>
            </div>
            <Section id='home'>
                <div className='relative z-10 px-4 sm:px-6 lg:px-8 mt-34 md:mt-56 flex flex-col items-center justify-center gap-12'>
                    <motion.div
                        className='flex flex-col items-center justify-center gap-6 h-[350px]'
                        initial='hidden'
                        animate='visible'
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <UlLinkScd to='/more-info'>
                                <FaCircleInfo />
                                Get more information
                            </UlLinkScd>
                        </motion.div>
                        <motion.h1
                            className='text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-center'
                            variants={fadeUp}
                        >
                            Manage Your Finances <br /> Effortlessly with
                            Wealthy
                        </motion.h1>
                        <motion.p
                            className='text-xl max-sm:text-base max-md:text-lg dark:text-white/70 text-black/80 text-center'
                            variants={fadeUp}
                        >
                            Track your income, expenses, and savings in one
                            place.
                        </motion.p>
                        <motion.div
                            className='flex items-center justify-center gap-4'
                            variants={fadeUp}
                        >
                            <UlPrimaryButton to='/auth/login'>
                                <span>Get Started</span>
                            </UlPrimaryButton>
                            <UlSecondButton
                                className='dark:bg-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700'
                                to='#faq'
                                onClick={(e) => {
                                    e.preventDefault();
                                    const section =
                                        document.getElementById('faq');
                                    if (section) {
                                        section.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                    }
                                }}
                            >
                                <span className='tracking-tight'>
                                    Learn More
                                </span>
                            </UlSecondButton>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='relative w-full h-[34rem] lg:h-[48rem] mx-auto lg:min-w-5xl xl:min-w-7xl mb-24 flex items-center justify-center'
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            style={{ x: bg1X, y: bg1Y }}
                            className='absolute dark:bg-gray-800 bg-gray-200 w-[calc(100%-10rem)] h-[calc(100%-5rem)] rounded-2xl top-[138px] will-change-transform'
                        />
                        <motion.div
                            style={{ x: bg2X, y: bg2Y }}
                            className='absolute dark:bg-gray-900 bg-gray-100 w-[calc(100%-5rem)] h-[calc(100%-5rem)] rounded-2xl top-[112px] will-change-transform'
                        />
                        <motion.div
                            className='relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden'
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: 'easeOut',
                            }}
                        >
                            <div className='relative w-full min-w-fit h-full rounded-2xl flex items-center justify-center overflow-hidden'>
                                <img
                                    src={hero}
                                    alt='Hero'
                                    className='absolute w-full min-w-fit h-fit object-contain xl:bottom-[-32rem] lg:bottom-[-17rem]'
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>
            {/* Features Section */}
            <Section id='features' className='pt-36'>
                <div className='relative w-full mx-auto xl:max-w-7xl h-full'>
                    <div
                        ref={featureRef}
                        className='relative h-min w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 px-4 md:px-6 lg:px-8'
                    >
                        <motion.div
                            className='relative flex flex-col flex-2/4 w-full max-w-max h-full'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                        >
                            <motion.div
                                style={{
                                    y: isLgUp ? tagY : 0,
                                    position: isLgUp ? 'sticky' : 'static',
                                    top: isLgUp ? 120 : 'auto',
                                    zIndex: 10,
                                }}
                                className='w-full max-w-xl flex flex-col items-center lg:items-start gap-6'
                                variants={fadeUp}
                            >
                                <TagSection
                                    className='items-center lg:items-start text-center lg:text-start'
                                    tag1='FEATURES'
                                    title='Why should I use Wealthy?'
                                    description='Every day, Wealthy helps you understand, control, and optimize your finances as a personal assistant.'
                                />
                                <div className='flex flex-row gap-4'>
                                    <UlPrimaryButton>
                                        Get Started
                                    </UlPrimaryButton>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className='max-w-xl w-full flex-2/4 flex flex-col gap-4'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stagger}
                        >
                            {routesFeatures.slice(0, 1).map((route, idx) => {
                                const Icon = route.icon;
                                return (
                                    <motion.div key={idx} variants={fadeUp}>
                                        <Card
                                            icon={<Icon />}
                                            title={route.title}
                                        >
                                            {route.children ? (
                                                <route.children />
                                            ) : null}
                                        </Card>
                                    </motion.div>
                                );
                            })}
                            {routesFeatures.slice(1, 5).map((route, idx) => {
                                const Icon = route.icon;
                                return (
                                    <motion.div key={idx} variants={fadeUp}>
                                        <Card
                                            icon={<Icon />}
                                            title={route.title}
                                            paragraph={route.paragraph}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </Section>
            {/* How It Works Section */}
            <Section className='pt-36' id='how-it-works'>
                <BgSection className='top-[-12rem] lg:top-[0rem]' animated />
                <div className='w-full h-full max-w-7xl mx-auto relative flex items-center justify-center'>
                    <motion.div
                        className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div
                            className='relative flex items-center justify-center'
                            variants={fadeUp}
                        >
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1='How it works'
                                title='Track your finances in 3 easy steps'
                                description='Wealthy is designed to be user-friendly and intuitive, making it easy for anyone to manage their finances effectively.'
                            />
                        </motion.div>
                        <motion.div
                            className='flex flex-col lg:flex-row items-center justify-center gap-8 pt-48'
                            variants={stagger}
                        >
                            {stepsHowItWorks.map((route, idx) => (
                                <motion.div
                                    key={route.step}
                                    className='h-48 w-72 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-gray-100 dark:border-gray-800 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/80 dark:hover:bg-blue-900/60'
                                    variants={fadeUp}
                                >
                                    <div className='text-3xl mb-3 font-bold text-blue-500'>
                                        {route.step}
                                    </div>
                                    <div className='font-semibold mb-2'>
                                        {route.title}
                                    </div>
                                    <div className='text-sm dark:text-white/70 text-black/80'>
                                        {route.description}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className='relative w-max h-max'
                            variants={fadeUp}
                        >
                            <UlLinkScd>
                                <FaCircleInfo />
                                Any questions ? <br />
                            </UlLinkScd>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>
            {/* Testimonial Section */}
            <Section className='pt-36' id='testimonials'>
                <div className='w-full max-w-7xl mx-auto h-full flex items-center justify-center relative overflow-hidden'>
                    <motion.div
                        className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div
                            className='relative flex items-center justify-center'
                            variants={fadeUp}
                        >
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1='Testimonials'
                                title='What our users say'
                                description="Wealthy has transformed the way I manage my finances. It's user-friendly and has helped me save more than ever before!"
                            />
                        </motion.div>
                        <motion.div
                            className='relative w-full max-w-[100rem] overflow-hidden py-12'
                            variants={fadeIn}
                        >
                            {/* Blur kiri */}
                            <div className='pointer-events-none absolute left-0 top-0 h-full w-32 z-10'>
                                <div className='w-full h-full bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent' />
                            </div>
                            {/* Blur kanan */}
                            <div className='pointer-events-none absolute right-0 top-0 h-full w-32 z-10'>
                                <div className='w-full h-full bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent' />
                            </div>
                            {/* Running text testimonial */}
                            <motion.div
                                className='flex gap-8 will-change-transform'
                                initial={{ x: 0 }}
                                animate={{
                                    x: -testimonials.length * (320 + 32),
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    duration: 50,
                                    ease: 'linear',
                                }}
                            >
                                {testimonials
                                    .concat(testimonials)
                                    .map((item, idx) => (
                                        <motion.div
                                            key={idx + '-' + item.name}
                                            variants={fadeUp}
                                        >
                                            <CardScd {...item} />
                                        </motion.div>
                                    ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>
            {/* FAQ Section */}
            <Section className='pt-36' id='faq'>
                <BgSection className='top-[-22rem] lg:top-[-22rem] min-h-[1440px]' />
                <motion.div
                    className='w-full max-w-7xl mx-auto h-max relative flex flex-col items-center'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                >
                    <motion.div
                        className='w-full h-full flex flex-col items-center gap-4 px-4 md:px-6 lg:px-8'
                        variants={fadeUp}
                    >
                        <div className='relative flex items-center justify-center'>
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1='FAQ'
                                title='Frequently Asked Questions'
                                description='Wealthy is designed to be user-friendly and intuitive, making it easy for anyone to manage their finances effectively.'
                            />
                        </div>
                        <motion.div
                            className='w-full max-w-2xl h-full flex flex-col gap-4 pt-48'
                            variants={stagger}
                        >
                            {faqData.map((route, idx) => (
                                <motion.div key={idx} variants={fadeUp}>
                                    <DropDown
                                        title={route.question}
                                        description={route.answer}
                                        open={openIndices.has(idx)}
                                        setOpen={() => handleDropdown(idx)}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <p className='text-sm font-semibold dark:text-white/70 text-black/80 text-center max-w-2xl tracking-tight'>
                                Still have questions?Email at us:{' '}
                                <span className='text-blue-500 cursor-pointer hover:underline font-semibold'>
                                    wealthy@gmail.com
                                </span>
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Section>
            {/* Pricing Section */}
            <Section className='pt-24' id='pricing' underCross={true}>
                <motion.div
                    className='w-full max-w-7xl mx-auto flex items-center justify-center relative mb-28'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                >
                    <motion.div
                        className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'
                        variants={fadeUp}
                    >
                        <motion.div
                            className='relative flex items-center justify-center'
                            variants={fadeUp}
                        >
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1='Pricing'
                                title='Choose Your Plan'
                                description='Select the plan that fits your needs. Wealthy offers flexible pricing for everyone.'
                            />
                        </motion.div>
                        <motion.div
                            className='w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 pt-12'
                            variants={stagger}
                        >
                            <motion.div
                                variants={fadeUp}
                                className='flex-1/2 w-full max-w-lg'
                            >
                                <Card
                                    className='w-full max-w-lg'
                                    title='Free Plan'
                                    icon={<Award size={24} />}
                                    paragraph='Perfect for individuals who want to start managing their finances without any cost.'
                                >
                                    <span className='absolute right-4 flex items-center text-2xl font-semibold'>
                                        $0
                                    </span>
                                    <ul className='text-left text-sm dark:text-white/70 text-black/80 my-4 flex flex-col gap-2'>
                                        <li className='flex items-center gap-2'>
                                            <span className='text-green-500'>
                                                <Check size={14} />
                                            </span>
                                            Unlimited income & expense tracking
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <span className='text-green-500'>
                                                <Check size={14} />
                                            </span>
                                            Basic monthly reports
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <span className='text-green-500'>
                                                <Check size={14} />
                                            </span>
                                            Personal budgeting
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <span className='text-green-500'>
                                                <Check size={14} />
                                            </span>
                                            Access all device
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <span className='text-green-500'>
                                                <Check size={14} />
                                            </span>
                                            Secure cloud backup
                                        </li>
                                    </ul>
                                    <UlPrimaryButton
                                        to='/pricing/free'
                                        className='!w-full bg-blue-600'
                                    >
                                        Choose Free
                                    </UlPrimaryButton>
                                </Card>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                className='flex-1/2 w-full max-w-lg'
                            >
                                <Card
                                    className='w-full max-w-lg'
                                    title='Premium Plan'
                                    icon={<BadgeDollarSign size={24} />}
                                >
                                    <span className='absolute right-4 flex items-center text-2xl font-semibold'>
                                        Coming Soon
                                    </span>
                                    <UlPrimaryButton
                                        to='#'
                                        className='!w-full bg-gray-600 pointer-events-none'
                                    >
                                        Choose Premium
                                    </UlPrimaryButton>
                                </Card>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <p className='text-sm dark:text-white/70 text-black/80 text-center max-w-2xl'>
                                All plans come with a 30-day money-back
                                guarantee. If you're not satisfied, we'll refund
                                your purchase, no questions asked.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Section>
        </div>
    );
};

export default Home;
