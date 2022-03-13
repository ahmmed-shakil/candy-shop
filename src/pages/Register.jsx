import React, { Component } from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import bg from "../assets/images/reg-bg.jpg"

class Register extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ background: `url(${bg})`, backgroundSize: "cover" }} className=' text-white py-5 position-relative '>
                    <div style={{ position: "relative", zIndex: 999 }}>
                        <h1>Create Account</h1>
                        <div className='py-2 bg-dark form-container'>
                            <form>
                                <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="email" placeholder='First Name' />
                                <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="email" placeholder='Last Name' />
                                <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="email" placeholder='Email' />
                                <input className='text-white w-100 my-2 p-2 border-bottom bg-transparent border-0' type="password" placeholder="Password" />
                                <button className='w-100 p-2 btn btn-danger fw-bolder text-white border-0 my-2'>CREATE</button>

                            </form>
                            <p>Return to Store</p>
                        </div>
                    </div>
                    <div className='overlay'>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Register;
