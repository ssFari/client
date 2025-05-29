import { useEffect, useState } from 'react';
import GridSVG from '../assets/svg/GridSVG';

export default function BgGrid() {
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

    useEffect(() => {
        const update = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const floatingCircles = [
        {
            size: 120,
            top: '10%',
            left: '15%',
            color: 'bg-blue-300/50 dark:bg-blue-900/50',
            anim: 'float1',
        },
        {
            size: 80,
            top: '20%',
            left: '70%',
            color: 'bg-blue-300/50 dark:bg-blue-900/50',
            anim: 'float2',
        },
        {
            size: 100,
            top: '30%',
            left: '25%',
            color: 'bg-sky-500/50 dark:bg-sky-900/50',
            anim: 'float3',
        },
    ];

    return (
        <div
            className='absolute inset-0 w-full h-full pointer-events-none z-0 bg-gray-50 dark:bg-gray-950 transition-colors duration-300'
            style={{ overflow: 'hidden' }}
        >
            {/* Grid SVG full screen, no tiling needed */}
            <GridSVG width={dimensions.width} height={dimensions.height} />
            {/* Floating animated circles */}
            {floatingCircles.map((circle, idx) => (
                <div
                    key={idx}
                    className={`absolute rounded-full blur-2xl ${circle.color} pointer-events-none ${circle.anim}`}
                    style={{
                        width: circle.size,
                        height: circle.size,
                        top: circle.top,
                        left: circle.left,
                        zIndex: 2,
                    }}
                />
            ))}
            {/* Blur di samping kiri & kanan */}
            <div className='pointer-events-none absolute top-0 left-0 h-full lg:w-3xl'>
                <div className='w-full h-full bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent' />
            </div>
            <div className='pointer-events-none absolute top-0 right-0 h-full lg:w-3xl'>
                <div className='w-full h-full bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent' />
            </div>
            {/* Blur di samping atas & bawah */}
            <div className='pointer-events-none absolute left-0 top-0 w-full h-6/12'>
                <div className='w-full h-full bg-gradient-to-b from-gray-50 dark:from-gray-950 to-transparent' />
            </div>
            <div className='pointer-events-none absolute left-0 bottom-0 w-full lg:h-6/12'>
                <div className='w-full h-full bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent' />
            </div>
        </div>
    );
}
