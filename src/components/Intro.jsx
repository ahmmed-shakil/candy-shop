import React, { Component } from 'react';
import bg from "../assets/images/introBg.jpg"



class Intro extends Component {
    render() {
        return (
            <div className="intro d-flex align-items-center justify-content-center">
                <div>
                    <h3>WELCOME TO CANDYMAIL - HOME OF AMERICAN <br /> CANDY & SWEETS</h3>
                    <p> Buy American Candy, Chocolate, American Sweets, Sodas and Snacks and more!</p>

                    <p>We also stock a large range of Japanese Sweets, Australian chocolate and candy <br /> from around the world.</p>

                    <p>Rated Excellent on Trustpilot</p>
                </div>
            </div>
        );
    }
}

export default Intro;
