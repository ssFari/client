import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import MainNavbar from '../components/MainNavbar';

const MainLayout = () => {
    return (
        <div className='relative w-full min-h-screen flex flex-col items-center justify-between *:m-0 *:p-0'>
            <div className='relative z-10 w-full h-full flex flex-col items-center justify-between'>
                <MainNavbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
