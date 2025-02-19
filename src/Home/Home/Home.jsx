import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Banner/Service/Service';
import TopCountry from '../TopCountry/TopCountry';
import IELTS from '../IELTS/IELTS';
import StudentsReview from '../StudentsReview/StudentsReview';
import Questions from '../Questions/Questions';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <TopCountry></TopCountry>
            <IELTS></IELTS>
            <StudentsReview></StudentsReview>
            <Questions></Questions>
        </div>
    );
};

export default Home;