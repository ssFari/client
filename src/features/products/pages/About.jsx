import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import BgGrid from '../../../utils/BgGrid';
import { motion } from 'framer-motion';
import {
    useHandleMouseMove,
    useMotionAnimation,
    useIsMobileDevice,
    useIsLgUp,
} from '../../../hooks/customHooks';
import {
    UlLinkScd,
    UlPrimaryButton,
    UlSecondButton,
} from '../../../utils/utils';
import { FaCircleInfo } from 'react-icons/fa6';
import { heroAbout, about1 } from '../../../assets/img/imgAll';
import { TagSection } from '../components/componentsAll';
import Card from '../../../components/Card';
import { Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { creatorData } from '../routes/Routes';

const About = () => {
    const { bg3X, bg3Y, bg1X, bg1Y, bg2X, bg2Y } = useHandleMouseMove();

    const { fadeUp, fadeIn, stagger } = useMotionAnimation();
    const isLgUp = useIsLgUp();

    const [activeOnClick, setActiveOnClick] = useState(false);
    const isMobileDevice = useIsMobileDevice();

    return (
        <div className='relative w-full h-full'>
            <Section id='about'>
                <motion.div
                    className='w-full h-full absolute'
                    style={{ x: bg3X, y: bg3Y }}
                >
                    <BgGrid />
                </motion.div>
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
                            className='text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-center dark:text-white text-black'
                            variants={fadeUp}
                        >
                            About Wealthy
                        </motion.h1>
                        <motion.p
                            className='text-xl max-sm:text-base max-md:text-lg dark:text-white/50 text-black/80 text-center'
                            variants={fadeUp}
                        >
                            Change the way you manage your money - smarter, more
                            conscious, calmer.
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
                                to='/?scroll=faq'
                            >
                                <span className='tracking-tight'>
                                    Learn More
                                </span>
                            </UlSecondButton>
                        </motion.div>
                    </motion.div>
                    <div className='relative w-full mx-auto lg:min-w-5xl xl:min-w-7xl h-[34rem] lg:h-[48rem] flex items-center justify-center'>
                        <motion.div
                            style={{ x: bg1X, y: bg1Y }}
                            className='absolute dark:bg-gray-800 bg-gray-200 w-[calc(100%-10rem)] h-[calc(100%-5rem)] rounded-2xl top-[138px] will-change-transform'
                        />
                        <motion.div
                            style={{ x: bg2X, y: bg2Y }}
                            className='absolute dark:bg-gray-900 bg-gray-100 w-[calc(100%-5rem)] h-[calc(100%-5rem)] rounded-2xl top-[112px] will-change-transform'
                        />
                        <motion.div
                            className='relative w-full min-w-fit h-full rounded-2xl overflow-hidden'
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: 'easeOut',
                            }}
                        >
                            <img
                                src={heroAbout}
                                alt='Hero'
                                className='relative w-full min-w-fit h-full object-cover brightness-125'
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>
            <Section className='pt-36' id='our-story'>
                <div className='w-full h-max flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-8'>
                    <div className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-6 gap-4'>
                        <TagSection
                            className='text-center lg:text-start items-center lg:items-start lg:col-span-3 pb-6'
                            tag1='Our Story'
                            title={`What was the motivation behind Wealthy's creation?`}
                            description={`Let's start from the beginning`}
                        />

                        <div className='lg:col-span-3'>
                            <div className='text-sm md:text-base text-justify leading-relaxed dark:text-white/70 text-black/80 flex flex-col gap-4'>
                                <span className='block'>
                                    Wealthy was born out of a simple yet
                                    universal frustration — managing personal
                                    finances shouldn't be complicated,
                                    intimidating, or boring.
                                </span>
                                <ul className='list-disc list-inside'>
                                    Like many people, we often found ourselves
                                    asking:
                                    <li>"Where did my money go this month?"</li>
                                    <li>
                                        "How can I save more without changing my
                                        lifestyle too much?"
                                    </li>
                                    <li>
                                        "Why does budgeting feel like a chore?"
                                    </li>
                                </ul>
                                <span className='flex flex-col gap-4'>
                                    <p>
                                        These questions highlighted a huge gap
                                        in how people interact with their money:
                                    </p>
                                    <blockquote className='bg-blue-200/60 text-blue-500 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-md'>
                                        <p className='text-base font-semibold italic'>
                                            "People want clarity and control —
                                            not confusion and anxiety."
                                        </p>
                                    </blockquote>
                                </span>
                                <span>
                                    Wealthy was created to bridge that gap — to
                                    turn financial tracking into a simple,
                                    enjoyable, and empowering experience.
                                </span>
                                <ul>
                                    It's not just about tracking your income and
                                    expenses. It's about:
                                    <li>✅ Building financial confidence</li>
                                    <li>
                                        ✅ Making informed choices every day
                                    </li>
                                    <li>✅ Feeling at peace with your money</li>
                                </ul>
                            </div>
                        </div>
                        <div className='lg:col-span-6'>
                            <div className='relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-2xl group cursor-pointer'>
                                <img
                                    src={about1}
                                    alt='about-1'
                                    className='brightness-50 hover:scale-110 duration-300 ease-in-out hover:brightness-70'
                                />
                            </div>
                        </div>

                        <Card
                            className='lg:col-span-3 h-full'
                            title='Vision'
                            icon={<Star />}
                            paragraph='To create a world where everyone feels confident, in control, and empowered in managing their personal finances — achieving true wealth in every sense.'
                        />
                        <Card
                            className='lg:col-span-3 h-full'
                            title='Mission'
                            icon={<Target />}
                            paragraph='Our mission is to empower individuals to understand and take control of their finances through a simple, intuitive, and enjoyable experience — helping them build financial confidence and live more peacefully.'
                        />
                    </div>
                </div>
            </Section>
            <Section className='pt-36' id='creators'>
                <div className='w-full h-max flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-gray-200/70 dark:bg-gray-900/45 py-10'>
                    <div className='w-full max-w-7xl flex flex-col gap-10 items-center'>
                        <TagSection
                            className='text-center items-center max-w-xl'
                            tag1='Creators'
                            title='Meet the Creators'
                            description='Wealthy was created by a team of passionate individuals who are dedicated to helping people manage their finances.'
                        />
                        <div
                            className='relative grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden rounded-2xl lg:cursor-default cursor-pointer group'
                            onClick={() => {
                                if (isMobileDevice)
                                    setActiveOnClick((prev) => !prev);
                            }}
                        >
                            <div className='col-span-1 gap-4'>
                                <div className='relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-2xl cursor-pointer border border-gray-200/70 dark:border-gray-900/45'>
                                    <img
                                        src={creatorData.image}
                                        alt={creatorData.name}
                                        className={
                                            'w-full h-full object-cover object-[center_10%] brightness-50 duration-300 ease-in-out ' +
                                            (isMobileDevice
                                                ? activeOnClick
                                                    ? 'scale-110 brightness-70'
                                                    : ''
                                                : isLgUp
                                                  ? 'hover:scale-110 hover:brightness-70'
                                                  : 'group-hover:scale-110 group-hover:brightness-70')
                                        }
                                    />
                                </div>
                            </div>
                            <div className='col-span-1 w-full h-full absolute lg:relative gap-4 border border-gray-200/70 dark:border-gray-900/45 lg:border-0'>
                                <div className='relative w-full h-full flex flex-col items-start justify-end lg:justify-start'>
                                    <div className='relative w-full p-4 flex flex-col items-start gap-2 before:content-[""] before:w-[10%] before:h-[2px] dark:before:bg-white/70 before:bg-black/80 before:absolute before:bottom-4 before:left-4'>
                                        <p className='text-xl text-white/70  dark:lg:text-white/70 lg:text-black/80 text-center lg:text-start'>
                                            {creatorData.title}
                                        </p>
                                        <h3 className='text-2xl lg:text-3xl font-bold text-center lg:text-start text-white dark:lg:text-white lg:text-black pb-2'>
                                            {creatorData.name}
                                        </h3>
                                        <p className='lg:block hidden text-sm text-white/70 dark:lg:text-white/70 lg:text-black/80 pb-8'>
                                            {creatorData.description}
                                        </p>
                                    </div>
                                    <div className='absolute lg:relative top-0 left-0 w-full h-full flex flex-col lg:justify-end justify-start items-start p-4'>
                                        {/* Social Media Follow Section */}
                                        <span className='text-base font-semibold mb-2 lg:block hidden'>
                                            Follow
                                        </span>
                                        <div className='flex lg:flex-row flex-col gap-4'>
                                            {creatorData.socials.map(
                                                (social, index) => (
                                                    <Link
                                                        key={index}
                                                        to={social.href}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        aria-label={
                                                            social.label
                                                        }
                                                        className={
                                                            'text-white/70 lg:text-black/80 dark:lg:text-white/70 hover:text-blue-600 dark:hover:text-blue-500 scale-0 lg:scale-100 transition-all duration-300 ' +
                                                            (isMobileDevice
                                                                ? activeOnClick
                                                                    ? ' scale-100 rotate-0'
                                                                    : ' rotate-90'
                                                                : isLgUp
                                                                  ? ' rotate-0'
                                                                  : ' group-hover:scale-100 group-hover:rotate-0 rotate-90')
                                                        }
                                                    >
                                                        <social.Icon
                                                            size={22}
                                                        />
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className='pt-36' id='team' underCross={true}>
                <div className='w-full h-max flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-36'>
                    <div className='w-full max-w-7xl h-full flex flex-col gap-8 items-center justify-center'>
                        <Card className={'w-full'}>
                            <div className='flex flex-col items-center justify-center gap-4 py-14'>
                                <h3 className='text-3xl lg:text-5xl font-bold text-center flex items-center gap-3'>
                                    <span className='inline-block animate-bounce'>
                                        🚀
                                    </span>
                                    Start the Journey to Success!
                                </h3>
                                <p className='text-l max-w-2xl text-center text-white/70 dark:text-white/70 lg:text-black/80'>
                                    Join us and be part of a growing community.
                                    Seize opportunities, develop your potential,
                                    and realize your dreams with us!
                                </p>
                                <UlPrimaryButton
                                    to={'/auth/login'}
                                    className='mt-2 px-8 py-3 text-lg hover:bg-blue-700 transition-colors duration-300 '
                                >
                                    Start Now
                                </UlPrimaryButton>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
