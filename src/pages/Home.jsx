import React, { Component } from 'react';
import CategoriesSection from '../components/CategoriesSection';
import DeliveryFee from '../components/DeliveryFee';
import DeliverySteps from '../components/DeliverySteps';
import Intro from '../components/Intro';
import Mysterybox from '../components/MysteryBox';
import Newarrivals from '../components/NewArrivals';
import Offer from '../components/Offer';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Offer />
                <Header />
                <Intro />
                <Mysterybox />
                <CategoriesSection />
                <Newarrivals />
                <DeliveryFee />
                <DeliverySteps />
                <Footer />
            </div>
        );
    }
}

export default Home;
