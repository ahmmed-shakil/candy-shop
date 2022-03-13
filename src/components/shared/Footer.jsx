import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import bg from '../../assets/images/footer-background.gif';

class Footer extends Component {
    render() {
        return (
            <div style={{ background: `url(${bg})`, color: "#FFF" }} className='py-4 text-start px-2'>
                <Row>
                    <Col xs={12} md={3} >
                        <h6>Contact Us</h6>
                    </Col>
                    <Col xs={12} md={3} >
                        <h6>Customer Service</h6>
                    </Col>
                    <Col xs={12} md={3} >
                        <h6>Information</h6>

                    </Col>
                    <Col xs={12} md={3} >
                        <h6>Connect With Us</h6>
                        <a href="#" className='text-white'><i className="bi bi-facebook fs-2 me-2 text-decoration-none"></i></a>
                        <a href="#" className='text-white'><i className="bi bi-instagram fs-2 text-decoration-none "></i></a>
                    </Col>
                </Row>
                <div>

                </div>
            </div >

        );
    }
}

export default Footer;
