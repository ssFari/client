import React from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

const useHandleMouseMove = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleEvent = (e) => {
        // Tentukan apakah ini event mouse atau touch
        const clientX = e.type.startsWith('mouse')
            ? e.clientX
            : e.touches[0].clientX;
        const clientY = e.type.startsWith('mouse')
            ? e.clientY
            : e.touches[0].clientY;

        const rect = document.body.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
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
        window.addEventListener('mousemove', handleEvent);
        window.addEventListener('touchmove', handleEvent, { passive: false }); // Menambahkan touchmove
        return () => {
            window.removeEventListener('mousemove', handleEvent);
            window.removeEventListener('touchmove', handleEvent); // Membersihkan touchmove
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
