import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Banner/Service/Service';
import TopCountry from '../TopCountry/TopCountry';
import IELTS from '../IELTS/IELTS';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <TopCountry></TopCountry>
            <IELTS></IELTS>
        </div>
    );
};

export default Home;