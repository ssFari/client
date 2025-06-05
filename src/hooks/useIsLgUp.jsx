import { useEffect, useState } from 'react';

const useIsLgUp = () => {
    const [isLgUp, setIsLgUp] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsLgUp(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isLgUp;
};

export default useIsLgUp;
