import React from 'react';
import NavRanna from '../../layouts/NavRanna';
import Banner from '../../layouts/banner/Banner';
import Chefs from '../../layouts/Chefs';
import SpecialFeatures from '../../layouts/special-features/SpecialFeatures';

const Home = () => {
    return (
        <>
            <NavRanna />
            <Banner />
            <Chefs />
            <SpecialFeatures />
        </>
    );
};

export default Home;