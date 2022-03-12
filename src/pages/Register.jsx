import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Threedots from '../components/shared/ThreeDots';

class Register extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bg-danger text-white py-5'>
                    <h1>Create Account</h1>
                    <Threedots />
                    <Container className='w-50 py-2'>
                        <form>
                            <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="email" placeholder='First Name' />
                            <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="email" placeholder='Last Name' />
                            <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="email" placeholder='Email' />
                            <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="password" placeholder="Password" />
                            <button className='w-100 p-2 btn btn-danger fw-bolder text-white border-0 my-2'>CREATE</button>

                        </form>
                        <p>Return to Store</p>
                    </Container>
                </div>
                <Newsletter />
                <Footer />
            </div>
        );
    }
}

export default Register;
