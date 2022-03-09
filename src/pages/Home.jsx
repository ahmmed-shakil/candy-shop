import React, { Component } from 'react';
import CategoriesSection from '../components/CategoriesSection';
import Intro from '../components/Intro';
import Mysterybox from '../components/MysteryBox';
import Newarrivals from '../components/NewArrivals';
import Offer from '../components/Offer';
import Header from '../components/shared/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Offer />
                <Header />
                <Intro />
                <Mysterybox />
                <Newarrivals />
                <CategoriesSection />
            </div>
        );
    }
}

export default Home;
