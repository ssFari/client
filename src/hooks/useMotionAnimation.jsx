const useMotionAnimation = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'anticipate' },
        },
    };
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: 'anticipate' },
        },
    };
    const stagger = {
        visible: { transition: { staggerChildren: 0.25 } },
    };
    return {
        fadeUp,
        fadeIn,
        stagger,
    };
};

export default useMotionAnimation;
