import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    useMemo,
} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const RealtimeChart = () => {
    // Menggunakan useCallback untuk fungsi yang akan diregenerasi setiap 3 detik
    const generateMonthlyData = useCallback(() => {
        return months.map((month) => ({
            month,
            income: Math.round(2000 + Math.random() * 1000),
            expense: Math.round(1200 + Math.random() * 800),
        }));
    }, []); // Dependensi kosong karena tidak bergantung pada props/state lain yang berubah

    const [data, setData] = useState(generateMonthlyData());
    const intervalRef = useRef();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setData(generateMonthlyData());
        }, 3000);
        return () => clearInterval(intervalRef.current);
    }, [generateMonthlyData]); // Menambahkan generateMonthlyData sebagai dependensi

    useEffect(() => {
        const htmlElement = document.documentElement;

        const checkDark = () => {
            setIsDark(htmlElement.classList.contains('dark'));
        };

        // Cek preferensi awal saat komponen dipasang
        checkDark();

        // Gunakan MutationObserver untuk mendeteksi perubahan atribut 'class' pada <html>
        // yang diubah oleh useDarkMode
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'class'
                ) {
                    checkDark();
                }
            }
        });

        observer.observe(htmlElement, { attributes: true });

        // Bersihkan observer saat komponen dilepas
        return () => {
            observer.disconnect();
        };
    }, []); // Dependensi kosong karena hanya perlu dijalankan sekali saat mount

    // Pilih warna grid sesuai mode, dihitung ulang hanya jika isDark berubah
    const gridColor = useMemo(() => (isDark ? '#374151' : '#e5e7eb'), [isDark]);

    return (
        <div className='w-full h-fit bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 shadow flex flex-col gap-4'>
            <div>
                <h3 className='font-semibold'>Monthly Income vs Expense</h3>
                <span className='text-[12px] dark:text-white/70 text-black/80'>
                    last 6 months
                </span>
            </div>
            <ResponsiveContainer width='100%' height={300}>
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid
                        strokeDasharray='3 3'
                        vertical={false}
                        horizontal={true}
                        stroke={gridColor}
                    />
                    <XAxis
                        dataKey='month'
                        axisLine={true}
                        tickLine={true}
                        tick={{
                            fill: isDark ? '#9CA3AF' : '#6B7280',
                            fontSize: 12,
                        }}
                    />
                    <YAxis
                        axisLine={true}
                        tickLine={true}
                        tick={{
                            fill: isDark ? '#9CA3AF' : '#6B7280',
                            fontSize: 12,
                        }}
                        width={40}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: isDark ? '#1f2937' : '#fff', // dark:bg-gray-800
                            color: isDark ? '#f3f4f6' : '#111827', // dark:text-gray-100
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '13px',
                            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                        }}
                    />
                    <Legend />
                    <Line
                        type='monotone'
                        dataKey='income'
                        stroke='#6366F1'
                        strokeWidth={2}
                        dot={{ r: 4, strokeWidth: 2 }}
                        activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                    <Line
                        type='monotone'
                        dataKey='expense'
                        stroke='#F97316'
                        strokeWidth={2}
                        dot={{ r: 4, strokeWidth: 2 }}
                        activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RealtimeChart;
