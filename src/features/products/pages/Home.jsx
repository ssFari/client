import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCircleInfo } from 'react-icons/fa6';
import {
    UlLinkScd,
    UlSecondButton,
    UlPrimaryButton,
    BgGrid,
    BgSection,
} from '../../../utils/utils';
import { Section, TagSection } from '../components/componetsAll';
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

const Home = () => {
    const { bg1X, bg1Y, bg2X, bg2Y, bg3X, bg3Y } = useHandleMouseMove();
    const { tagY, featureRef, isLgUp } = useStickyScrollItem();

    const [openIndices, setOpenIndices] = useState(new Set());

    const handleDropdown = (idx) => {
        setOpenIndices((prevOpenIndices) => {
            const newSet = new Set(prevOpenIndices);
            if (newSet.has(idx)) {
                newSet.delete(idx); // Close if already open
            } else {
                newSet.add(idx); // Open if closed
            }
            return newSet;
        });
    };

    return (
        <div className='relative w-full h-max'>
            {/* Hero Section */}
            <div className='w-full h-screen bg-transparent absolute z-[1] flex items-center justify-center'>
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
                    <div className='flex flex-col items-center justify-center gap-6 h-[350px]'>
                        <UlLinkScd to='/more-info' className=''>
                            <FaCircleInfo />
                            Get more information
                        </UlLinkScd>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-center dark:text-white text-black'>
                            Manage Your Finances <br /> Effortlessly with
                            Wealthy
                        </h1>
                        <p className='text-xl max-sm:text-base max-md:text-lg dark:text-white text-black'>
                            Track your income, expenses, and savings in one
                            place.
                        </p>
                        <div className='flex items-center justify-center gap-4'>
                            <UlPrimaryButton to='/contact' className=''>
                                <span>Get Started</span>
                            </UlPrimaryButton>
                            <UlSecondButton
                                className='dark:bg-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700'
                                to='/contact'
                            >
                                <span className='tracking-tight'>
                                    Learn More
                                </span>
                            </UlSecondButton>
                        </div>
                    </div>
                    <div className='relative w-full h-[34rem] lg:h-[48rem] mx-auto lg:min-w-5xl xl:min-w-7xl mb-24 flex items-center justify-center'>
                        <motion.div
                            style={{ x: bg1X, y: bg1Y }}
                            className='absolute dark:bg-gray-800 bg-gray-200 w-[calc(100%-10rem)] h-[calc(100%-5rem)] rounded-2xl top-[138px] will-change-transform'
                        />
                        <motion.div
                            style={{ x: bg2X, y: bg2Y }}
                            className='absolute dark:bg-gray-900 bg-gray-100 w-[calc(100%-5rem)] h-[calc(100%-5rem)] rounded-2xl top-[112px] will-change-transform'
                        />
                        <div className='relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden'>
                            <div className='relative w-full min-w-fit h-full rounded-2xl flex items-center justify-center overflow-hidden'>
                                <img
                                    src={hero}
                                    alt='Hero'
                                    className='absolute w-full min-w-fit h-fit object-contain xl:bottom-[-32rem] lg:bottom-[-17rem]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* Features Section */}
            <Section id='features' className='pt-36'>
                <div className='relative w-full mx-auto xl:max-w-[100rem] h-full min-h-screen'>
                    <div
                        ref={featureRef}
                        className='relative h-min flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 px-4 md:px-6 lg:px-8'
                    >
                        <div className='relative flex flex-col flex-2/4 w-full max-w-max h-full'>
                            <motion.div
                                style={{
                                    y: isLgUp ? tagY : 0,
                                    position: isLgUp ? 'sticky' : 'static',
                                    top: isLgUp ? 120 : 'auto',
                                    zIndex: 10,
                                }}
                                className='w-full max-w-xl flex flex-col gap-6'
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
                        </div>
                        <div className='max-w-xl w-full flex-2/4 flex flex-col gap-4'>
                            {routesFeatures.slice(0, 1).map((route, idx) => {
                                const Icon = route.icon;
                                return (
                                    <Card
                                        key={idx}
                                        icon={<Icon />}
                                        title={route.title}
                                    >
                                        {route.children ? (
                                            <route.children />
                                        ) : null}
                                    </Card>
                                );
                            })}
                            {routesFeatures.slice(1, 5).map((route, idx) => {
                                const Icon = route.icon;
                                return (
                                    <Card
                                        key={idx}
                                        icon={<Icon />}
                                        title={route.title}
                                        paragraph={route.paragraph}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Section>
            {/* How It Works Section */}
            <Section className='pt-36' id='how-it-works'>
                <div className='w-full h-full relative flex items-center justify-center'>
                    <BgSection
                        className='top-[-17rem] lg:top-[-4rem]'
                        animated={true}
                    />
                    <div className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-center'>
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1='How it works'
                                title='Track your finances in 3 easy steps'
                                description='Wealthy is designed to be user-friendly and intuitive, making it easy for anyone to manage their finances effectively.'
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 pt-48'>
                            {stepsHowItWorks.map((route) => {
                                return (
                                    <div
                                        key={route.step}
                                        className='h-48 w-72 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-gray-100 dark:border-gray-800 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/80 dark:hover:bg-blue-900/60'
                                    >
                                        <div className='text-3xl mb-3 font-bold text-blue-500'>
                                            {route.step}
                                        </div>
                                        <div className='font-semibold mb-2'>
                                            {route.title}
                                        </div>
                                        <div className='text-sm text-gray-600 dark:text-gray-300'>
                                            {route.description}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='relative w-max h-max'>
                            <UlLinkScd>
                                <FaCircleInfo />
                                Any questions ? <br />
                            </UlLinkScd>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className='pt-36' id='testimonials'>
                <div className='w-full h-max flex items-center justify-center relative'>
                    <div className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-center'>
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1={'Testimonials'}
                                title={'What our users say'}
                                description={
                                    'Wealthy has transformed the way I manage my finances. It’s user-friendly and has helped me save more than ever before!'
                                }
                            />
                        </div>
                        <div className='relative w-full max-w-[100rem] overflow-hidden pt-12'>
                            {/* Blur kiri */}
                            <div className='pointer-events-none absolute left-0 top-0 h-full w-32 z-10'>
                                <div className='w-full h-full bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent' />
                            </div>
                            {/* Blur kanan */}
                            <div className='pointer-events-none absolute right-0 top-0 h-full w-32 z-10'>
                                <div className='w-full h-full bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent' />
                            </div>
                            {/* Running text testimonial */}
                            <div className='w-full overflow-hidden'>
                                <div
                                    className='flex gap-8 animate-testimonial-marquee'
                                    style={{
                                        animation:
                                            'testimonial-marquee 40s linear infinite',
                                    }}
                                >
                                    {testimonials
                                        .concat(testimonials)
                                        .map((item, idx) => (
                                            <CardScd
                                                key={idx + '-' + item.name}
                                                {...item}
                                            />
                                        ))}
                                </div>
                            </div>
                            <style>{`
                                @keyframes testimonial-marquee {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(-50%); }
                                }
                                .animate-testimonial-marquee {
                                    width: max-content;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className='pt-24' id='pricing'>
                <div className='w-full flex items-center justify-center relative'>
                    <div className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-center'>
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1={'Pricing'}
                                title={'Choose Your Plan'}
                                description={
                                    'Select the plan that fits your needs. Wealthy offers flexible pricing for everyone.'
                                }
                            />
                        </div>
                        <div className='w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 pt-12'>
                            <Card
                                className='w-full max-w-lg flex-1/2'
                                title='Free Plan'
                                icon={<Award size={24} />}
                                paragraph='Perfect for individuals who want to start managing their finances without any cost.'
                            >
                                <span className='absolute right-4 flex items-center text-2xl font-semibold'>
                                    $0
                                </span>
                                <ul className='text-left text-sm text-gray-700 dark:text-gray-200 my-4 flex flex-col gap-2'>
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
                                    className={'!w-full bg-blue-600'}
                                >
                                    Choose Free
                                </UlPrimaryButton>
                            </Card>
                            <Card
                                className='w-full max-w-lg flex-1/2'
                                title='Premium Plan'
                                icon={<BadgeDollarSign size={24} />}
                            >
                                <span className='absolute right-4 flex items-center text-2xl font-semibold'>
                                    Coming Soon
                                </span>
                                <div></div>
                                <UlPrimaryButton
                                    to='#'
                                    className={
                                        '!w-full bg-gray-600 pointer-events-none'
                                    }
                                >
                                    Choose Premium
                                </UlPrimaryButton>
                            </Card>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 dark:text-gray-400 text-center max-w-2xl'>
                                All plans come with a 30-day money-back
                                guarantee. If you’re not satisfied, we’ll refund
                                your purchase, no questions asked.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className='pt-36' id='faq'>
                <div className='w-full h-full relative flex items-center justify-center'>
                    <BgSection className='top-[-17rem] lg:top-[-25rem] h-screen' />
                    <div className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-center'>
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1={'FAQ'}
                                title={'Frequently Asked Questions'}
                                description={
                                    'Wealthy is designed to be user-friendly and intuitive, making it easy for anyone to manage their finances effectively.'
                                }
                            />
                        </div>
                        <div className='w-full max-w-2xl h-full flex flex-col gap-4 pt-48'>
                            {faqData.map((route, idx) => (
                                <DropDown
                                    key={idx}
                                    title={route.question}
                                    description={route.answer}
                                    // Check if the current index is in the Set of open indices
                                    open={openIndices.has(idx)}
                                    // Pass a function to handle the toggle
                                    setOpen={() => handleDropdown(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
            <Section className='pt-36' id='contact'>
                <div className='w-full h-screen'>
                    <div className='w-full h-full flex flex-col items-center gap-12 px-4 md:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-center'>
                            <TagSection
                                className='text-center items-center max-w-2xl'
                                tag1={'Contact'}
                                title={''}
                                description={
                                    'Wealthy is designed to be user-friendly and intuitive, making it easy for anyone to manage their finances effectively.'
                                }
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
