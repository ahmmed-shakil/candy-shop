import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

class Cart extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bg-danger'>
                    <h1 className='pt-5'>Shopping Cart</h1>
                    <div className='pt-2 pb-5'>
                        <p>Your Cart is Currently Empty.</p>
                        <Link to="/" className='text-decoration-none text-white'><p>Continue browsing here.</p></Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Cart;
