import React from 'react';

// Simple grid SVG generator with logic, not static paths
const GRID_SIZE = 50;
const DOT_RADIUS = 3.5;
const DOT_COLOR = 'hsla(229, 91%, 54%, .3)';
const GRID_OPACITY = 0.5;

const GridSVG = ({ width, height }) => {
    // Default ke window.innerWidth/Height jika tidak ada props
    const svgWidth = width || window.innerWidth;
    const svgHeight = height || window.innerHeight;
    // Calculate how many cols and rows
    const cols = Math.ceil(svgWidth / GRID_SIZE);
    const rows = Math.ceil(svgHeight / GRID_SIZE);
    const rects = [];
    const dots = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const px = x * GRID_SIZE;
            const py = y * GRID_SIZE;
            rects.push(
                <rect
                    key={`rect-${x}-${y}`}
                    x={px}
                    y={py}
                    width={GRID_SIZE}
                    height={GRID_SIZE}
                    opacity={GRID_OPACITY}
                    stroke={DOT_COLOR}
                    strokeWidth={0.5}
                    fill='none'
                />,
            );
            dots.push(
                <circle
                    key={`dot-${x}-${y}`}
                    cx={px}
                    cy={py}
                    r={DOT_RADIUS}
                    fill={DOT_COLOR}
                    stroke='none'
                />,
            );
        }
    }
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            style={{ display: 'block' }}
        >
            <g>{rects}</g>
            <g>{dots}</g>
        </svg>
    );
};

export default GridSVG;
