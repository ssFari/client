import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const GRID_SIZE = 50;
const DOT_RADIUS = 3.5;
const GRID_OPACITY = 0.5;
const DOT_OPACITY = 0.5;

const GridSVG = ({ width, height }) => {
    const svgWidth = width || window.innerWidth;
    const svgHeight = height || window.innerHeight;

    const cols = Math.ceil(svgWidth / GRID_SIZE);
    const rows = Math.ceil(svgHeight / GRID_SIZE);

    const { rects, dots } = useMemo(() => {
        const calculatedRects = [];
        const calculatedDots = [];

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const px = x * GRID_SIZE;
                const py = y * GRID_SIZE;
                calculatedRects.push(
                    <rect
                        key={`rect-${x}-${y}`}
                        x={px}
                        y={py}
                        width={GRID_SIZE}
                        height={GRID_SIZE}
                        opacity={GRID_OPACITY}
                        stroke='currentColor'
                        strokeWidth={1}
                        fill='none'
                    />,
                );
                calculatedDots.push(
                    <circle
                        key={`dot-${x}-${y}`}
                        cx={px}
                        cy={py}
                        r={DOT_RADIUS}
                        fill='currentColor'
                        stroke='none'
                        opacity={DOT_OPACITY}
                    />,
                );
            }
        }
        return { rects: calculatedRects, dots: calculatedDots };
    }, [svgWidth, svgHeight, cols, rows]);

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className='absolute inset-0'
            style={{ display: 'block', width: '100vw', height: '100vh' }}
        >
            <g className='text-gray-300 dark:text-gray-800 transition-colors duration-300'>
                {/* Render semua garis */}
                {rects}
            </g>
            <g className='text-blue-400 dark:text-blue-900 transition-colors duration-300'>
                {dots}
            </g>
        </svg>
    );
};

GridSVG.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

export default GridSVG;
