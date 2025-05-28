import {
    PieChart,
    Sliders,
    MonitorSmartphone,
    ShieldUser,
    MousePointerClick,
} from 'lucide-react';
import RealtimeChart from '../../../components/RealtimeChart';

// Import gambar user secara eksplisit agar bundler (Vite/webpack) bisa resolve path-nya
import user1 from '../../../assets/user-img/user-1.jpg';
import user2 from '../../../assets/user-img/user-2.jpg';
import user3 from '../../../assets/user-img/user-3.jpg';
import user4 from '../../../assets/user-img/user-4.jpg';
import user5 from '../../../assets/user-img/user-5.jpg';
import user6 from '../../../assets/user-img/user-6.jpg';
import user7 from '../../../assets/user-img/user-7.jpg';
import user8 from '../../../assets/user-img/user-8.jpg';
import user9 from '../../../assets/user-img/user-9.jpg';
import user10 from '../../../assets/user-img/user-10.jpg';

export const routesNavbar = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Features',
        href: '/services',
    },
    {
        title: 'Pricing',
        href: '/pricing',
    },
    {
        title: "What's New",
        href: '/whats-new',
    },
    {
        title: 'Help',
        href: '/help',
    },
];

export const routesFeatures = [
    {
        icon: PieChart,
        title: 'Realtime Tracking',
        paragraph: '',
        children: RealtimeChart,
    },
    {
        icon: Sliders,
        title: 'Customizable Budgeting System',
        paragraph:
            'Create personalized budgets that adapt to your spending patterns and financial goals.',
        children: null,
    },
    {
        icon: MonitorSmartphone,
        title: 'Multi-Device Access',
        paragraph: `Access your financial data from any device, anytime. Your data syncs automatically across all platforms.`,
        children: null,
    },
    {
        icon: ShieldUser,
        title: 'Safe & Secure',
        paragraph:
            'Bank-level security ensures your financial data is always protected with advanced encryption.',
        children: null,
    },
    {
        icon: MousePointerClick,
        title: 'Easy to Use',
        paragraph:
            'Intuitive interface designed for effortless navigation and quick access to your financial insights.',
        children: null,
    },
];

export const stepsHowItWorks = [
    {
        step: 1,
        title: 'Sign Up & Set Up',
        description:
            'Create your account and set your financial goals to get started.',
    },
    {
        step: 2,
        title: 'Add Income & Expenses',
        description:
            'Input your income and expenses regularly to keep your records up to date.',
    },
    {
        step: 3,
        title: 'Monitor & Optimize',
        description:
            'Track your financial progress and get insights to optimize your spending and savings.',
    },
];

export const testimonials = [
    {
        name: 'Ayu Pratiwi',
        occupation: 'Freelancer',
        photo: user1,
        message:
            'Wealthy really helps me manage my monthly finances. The UI is easy to understand and the features are complete!',
        rating: 5,
    },
    {
        name: 'Budi Santoso',
        occupation: 'Entrepreneur',
        photo: user2,
        message:
            'I can easily monitor my business income and expenses. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Citra Lestari',
        occupation: 'Private Employee',
        photo: user3,
        message: 'The budgeting feature really helps me save for vacations.',
        rating: 4,
    },
    {
        name: 'Dewi Anggraini',
        occupation: 'Housewife',
        photo: user4,
        message:
            'This app makes it easy for me to manage my family finances every month.',
        rating: 5,
    },
    {
        name: 'Eko Prasetyo',
        occupation: 'Student',
        photo: user5,
        message: 'Wealthy helps me manage my allowance and college expenses.',
        rating: 4,
    },
    {
        name: 'Fajar Nugroho',
        occupation: 'Civil Servant',
        photo: user6,
        message:
            'The security system makes me feel safe storing financial data.',
        rating: 5,
    },
    {
        name: 'Gita Sari',
        occupation: 'Content Creator',
        photo: user7,
        message: 'The chart visualization is cool and easy to understand!',
        rating: 5,
    },
    {
        name: 'Hendra Wijaya',
        occupation: 'Entrepreneur',
        photo: user8,
        message: 'I can easily monitor daily cash flow.',
        rating: 4,
    },
    {
        name: 'Intan Permata',
        occupation: 'Teacher',
        photo: user9,
        message: 'This app really helps me manage my monthly salary.',
        rating: 5,
    },
    {
        name: 'Joko Susilo',
        occupation: 'Developer',
        photo: user10,
        message:
            'Multi-device integration makes it very easy to access data anywhere.',
        rating: 5,
    },
];

export const faqData = [
    {
        question: 'What is Wealthy?',
        answer: 'Wealthy is a financial management application that helps you easily track your income, expenses, and savings in an integrated way.',
    },
    {
        question: 'Is Wealthy free?',
        answer: 'Yes, Wealthy offers a free plan with core features. A premium plan with additional features is coming soon.',
    },
    {
        question: 'How do I use Wealthy?',
        answer: 'Simply sign up, enter your income and expenses, and Wealthy will help you monitor your finances in real time.',
    },
    {
        question: 'Is my data safe?',
        answer: 'Your data security is our priority. Wealthy uses encryption and cloud backup to protect your information.',
    },
    {
        question: 'Can I access Wealthy on multiple devices?',
        answer: 'Yes, Wealthy can be accessed from various devices such as smartphones, tablets, and computers.',
    },
];
