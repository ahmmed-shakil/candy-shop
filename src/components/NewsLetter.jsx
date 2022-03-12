import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Newsletter extends Component {
    render() {
        return (
            <div id='newsletter' className='bg-blue-theme text-white py-5' >
                <Container >
                    <Row className='justify-content-center align-items-center'>
                        <Col xs={12} md={6}>
                            <h3>Join our Mailing List</h3>
                            Sign up to receive latest product updates and special offers.
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-space-between align-items-center">
                            <input type="text" placeholder='Enter Your Email' />
                            <i className="bi bi-chevron-right mx-2  fw-bolder" style={{ cursor: "pointer" }}></i>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Newsletter;
