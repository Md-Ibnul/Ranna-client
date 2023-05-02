import React from 'react';
import './SpecialFeatures.css'
import {  FaChartPie, FaClock, FaPeopleArrows } from 'react-icons/fa';

const SpecialFeatures = () => {
    return (
        <div className='special-bg mt-16'>
            <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
                    <h2 className='text-white font-bold text-4xl text-center tracking-widest mb-14'>SPECIAL <span className='text-red-500'>FEATURES</span></h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white ms-6'>
                        <div className='w-5/6 text-center'>
                            <FaChartPie className='mx-auto text-5xl text-red-500' />
                            <h4 className='font-semibold text-2xl mt-6 tracking-wider'>Food Nutrtions</h4>
                            <p className='text-lg mt-3 tracking-wide'>Nutrition is the process by which the body nourishes itself by transforming food into energy and body tissues. The science of nutrition concerns everything the body does with food to carry on its functions.</p>
                        </div>
                        <div className='w-5/6 text-center'>
                        <FaClock className='mx-auto text-5xl text-red-500' />
                            <h4 className='font-semibold text-2xl mt-6 tracking-wider'>Cooking Period</h4>
                            <p className='text-lg mt-3 tracking-wide'>There are a number of things that can change the cooking time of a recipe. oven temp, thickness of the food, weather, and altitude.</p>
                        </div>
                        <div className='w-5/6 text-center'>
                        <FaPeopleArrows className='mx-auto text-5xl text-red-500' />
                            <h4 className='font-semibold text-2xl mt-6 tracking-wider'>Membership</h4>
                            <p className='text-lg mt-3 tracking-wide'>A membership site gives users access to exclusive content, typically through paid subscriptions. Additionally, online cooking classes have increased in popularity. That means more people are looking for new recipes to try.</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SpecialFeatures;