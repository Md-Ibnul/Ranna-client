import React, { useEffect, useState } from 'react';
import ChefsCard from './ChefsCard';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    },[])

    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-20'>
            <h2 className='text-xl md:text-3xl font-bold text-center'>Our Excellent <span className='text-red-600'>Chefs</span></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8'>
            {
                chefs.map(chef => <ChefsCard
                key={chef.id}
                chef={chef}
                ></ChefsCard>)
            }
        </div>
        </div>
    );
};

export default Chefs;