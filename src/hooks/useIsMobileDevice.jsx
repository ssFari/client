import { useEffect, useState } from 'react';

const useIsMobileDevice = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const ua = navigator.userAgent;
            setIsMobile(
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    ua,
                ),
            );
        };
        checkMobile();
    }, []);

    return isMobile;
};

export default useIsMobileDevice;
