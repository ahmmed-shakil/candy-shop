import React, { Component } from 'react';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Threedots from '../components/shared/ThreeDots';

class Cart extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bg-danger text-white'>
                    <h1 className='pt-5'>Shopping Cart</h1>
                    <Threedots />
                    <div className='pt-2 pb-5'>
                        <p>Your Cart is Currently Empty.</p>
                        <p>Continue browsing here.</p>
                    </div>
                </div>
                <Newsletter />
                <Footer />
            </div>
        );
    }
}

export default Cart;
