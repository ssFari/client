import React from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

const useHandleMouseMove = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = document.body.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const percentX = (mouseX / rect.width - 0.5) * 2; // -1 to 1
        const percentY = (mouseY / rect.height - 0.5) * 2; // -1 to 1
        x.set(percentX * 10); // max 20px
        y.set(percentY * 10);
    };

    const bg1X = useTransform(x, (v) => v);
    const bg1Y = useTransform(y, (v) => v);
    const bg2X = useTransform(x, (v) => v * 0.6);
    const bg2Y = useTransform(y, (v) => v * 0.6);
    const bg3X = useTransform(y, (v) => v * 1);
    const bg3Y = useTransform(y, (v) => v * 1);

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return {
        bg1X,
        bg1Y,
        bg2X,
        bg2Y,
        bg3X,
        bg3Y,
    };
};

export default useHandleMouseMove;
