import React from 'react';
import Home from './home/Home';
import Footer from '../layouts/Footer';
import NavRanna from '../layouts/NavRanna';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
        <NavRanna />
        <Outlet />
        <Footer />
        </>
    );
};

export default Main;