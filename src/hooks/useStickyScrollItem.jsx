import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const useStickyScrollItem = () => {
    const featureRef = useRef(null);
    const { scrollY } = useScroll();
    const stickyTop = 120; // px dari atas viewport
    const tagSectionHeight = 220; // px, sesuaikan dengan tinggi TagSection

    // State untuk cek apakah layar >= lg (>=1024px)
    const [isLgUp, setIsLgUp] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsLgUp(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const tagY = useTransform(scrollY, (y) => {
        if (!featureRef.current || !isLgUp) return 0;
        const sectionTop =
            featureRef.current.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + featureRef.current.offsetHeight;
        const start = sectionTop - stickyTop;
        const end = sectionBottom - tagSectionHeight - stickyTop;
        if (y < start) return 0;
        if (y > end) return end - start;
        return y - start;
    });

    return {
        tagY,
        featureRef,
        isLgUp, // tambahkan ini agar bisa dipakai di komponen
    };
};

export default useStickyScrollItem;
