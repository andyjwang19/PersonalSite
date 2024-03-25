import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
    return (
        <div className="flex h-screen flex-col bg-background-lavender ">
            <Header />
            <div className="h-[80px] w-full shrink-0 " />
            <Outlet />
        </div>
    );
};

export default Layout;
