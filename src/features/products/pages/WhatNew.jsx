import React from 'react';
import ComingSoonLayout from '../components/ComingSoonLayout';
import Section from '../components/Section';
import BgGrid from '../../../utils/BgGrid';
import { motion } from 'framer-motion';
import useHandleMouseMove from '../../../hooks/useHandleMouseMove';

const WhatNew = () => {
    const { bg3X, bg3Y } = useHandleMouseMove();

    return (
        <div className='relative w-full h-max'>
            <Section>
                <motion.div
                    className='w-full h-full absolute'
                    style={{ x: bg3X, y: bg3Y }}
                >
                    <BgGrid />
                </motion.div>
                <ComingSoonLayout />
            </Section>
        </div>
    );
};

export default WhatNew;
