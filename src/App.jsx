import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';
import MainLayout from './features/products/layouts/MainLayout';
import { Home, About, WhatNew } from './features/products/pages/pagesAll';

const App = () => {
    useDarkMode();
    return (
        <>
            <div className='w-full min-h-screen bg-gray-50 dark:bg-gray-950 dark:text-white text-black font-montserrat text-base overflow-hidden'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/whats-new' element={<WhatNew />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
