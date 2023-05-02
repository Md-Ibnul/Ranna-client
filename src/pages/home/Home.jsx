import React from 'react';
import NavRanna from '../../layouts/NavRanna';
import Banner from '../../layouts/banner/Banner';
import Chefs from '../../layouts/Chefs';
import SpecialFeatures from '../../layouts/special-features/SpecialFeatures';
import Footer from '../../layouts/Footer';
import Recipes from '../../layouts/Recipes';

const Home = () => {
    return (
        <>
            <Banner />
            <Chefs />
            <SpecialFeatures />
            <Recipes />
        </>
    );
};

export default Home;