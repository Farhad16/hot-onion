import React from 'react';
import Banner from '../Banner/Banner';
import CardSection from '../CardSection/CardSection';
import FoodCategory from '../FoodCategoy/FoodCategory';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <CardSection></CardSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;