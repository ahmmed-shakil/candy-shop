import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class DeliveryFee extends Component {
    render() {
        return (
            <div className="bg-danger text-center py-4 text-white">
                <Container className='align-items-center justify-content-center'>
                    <Row>
                        <Col xs={12} md={6}>
                            <p className='pb-0 mb-0'> Mainland Uk Delivery</p>
                            <p className='mb-0 opacity-75'>From &pound; 3.99</p>
                        </Col>
                        <Col xs={12} md={6} className="right-box">
                            <p className='pb-0 mb-0'> Orders over &pound;49.99 </p >
                            <p className='mb-0 opacity-75'>Free Delivery</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DeliveryFee;
