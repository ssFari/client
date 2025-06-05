import PropTypes from 'prop-types';

const AnimatedInfoCard = ({
    value,
    percent,
    label,
    icon,
    className,
    txColor,
    iconColor = 'bg-blue-200 text-blue-500 dark:text-blue-400 dark:bg-blue-800/35',
}) => {
    return (
        <div
            className={`bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow p-5 flex flex-col gap-2 w-full max-w-xs min-w-[220px] ${className}`}
        >
            <div className='flex items-center justify-between'>
                <div>
                    <div className='text-xs dark:text-white/70 text-black/80 font-medium mb-1'>
                        {label}
                    </div>
                    <div className='text-2xl font-bold'>{value}</div>
                </div>
                <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg  ${iconColor}`}
                >
                    {icon}
                </div>
            </div>
            <div className='flex items-center gap-2 mt-1'>
                <span
                    className={`text-green-500 font-semibold text-sm ${txColor}`}
                >
                    ↑ {percent}%
                </span>
                <span className='text-xs dark:text-white/70 text-black/80'>
                    vs last period
                </span>
            </div>
        </div>
    );
};

AnimatedInfoCard.propTypes = {
    value: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired, // icon bisa berupa elemen React
    className: PropTypes.string,
    txColor: PropTypes.string,
    iconColor: PropTypes.string,
};

export default AnimatedInfoCard;
