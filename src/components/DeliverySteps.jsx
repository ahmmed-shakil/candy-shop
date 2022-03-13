import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import packing from "../assets/images/packing.png"
import delivery from '../assets/images/delivery.png';
import love from '../assets/images/love-usa.png';

class DeliverySteps extends Component {
    render() {
        return (
            <div className='bg-dark text-white py-5'>
                <Container className='py-5'>
                    <h2>What Happens Next</h2>
                    <Row className='g-4'>
                        <Col className='p-2' xs={12} md={4}>
                            <img src={packing} className="d-block w-75 m-auto mb-4" alt="" />
                            <p>We carefully select the best sweets and treats from America and around the world to make your box super awesome!</p>
                        </Col>
                        <Col className='p-2' xs={12} md={4}>
                            <img src={delivery} className="d-block w-75 m-auto mb-4" alt="" />
                            <p>We pack and ship within same day if placed by 2pm Monday-Friday.</p>

                            <p>Next Working Day delivery Available!</p>
                        </Col>
                        <Col className='p-2' xs={12} md={4}>
                            <img src={love} className="d-block w-75 m-auto mb-4" alt="" />
                            <p>Enjoy! If you love your box, share to social media and tag us @candymailuk</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DeliverySteps;
