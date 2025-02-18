import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Banner/Service/Service';
import TopCountry from '../TopCountry/TopCountry';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <TopCountry></TopCountry>
        </div>
    );
};

export default Home;