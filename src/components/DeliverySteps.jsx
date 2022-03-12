import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import packing from "../assets/images/packing.png"
import delivery from '../assets/images/delivery.png';
import love from '../assets/images/love-usa.png';
import Threedots from './shared/ThreeDots';

class DeliverySteps extends Component {
    render() {
        return (
            <div className='bg-blue-theme text-white py-5'>
                <Container className='py-5'>
                    <h2>What Happens Next</h2>
                    <Threedots />
                    <Row className='g-4'>
                        <Col xs={12} md={4}>
                            <img src={packing} className="img-fluid" alt="" />
                            <p>We carefully select the best sweets and treats from America and around the world to make your box super awesome!</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <img src={delivery} className="img-fluid" alt="" />
                            <p>We pack and ship within same day if placed by 2pm Monday-Friday.</p>

                            <p>Next Working Day delivery Available!</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <img src={love} className="img-fluid" alt="" />
                            <p>Enjoy! If you love your box, share to social media and tag us @candymailuk</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DeliverySteps;
