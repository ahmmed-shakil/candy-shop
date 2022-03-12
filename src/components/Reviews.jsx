import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Threedots from './shared/ThreeDots';
import customer from '../assets/images/customer.jpg'

class Reviews extends Component {
    render() {
        return (
            <div className=' bg-danger text-white py-5'>
                <h2 className='pt-5'>WHAT OUR HAPPY CUSTOMERS ARE SAYING:
                </h2>
                <Threedots />
                <Row xs={1} md={4} className="g-4 pb-5">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card className='bg-transparent border-0' >
                                <Card.Img className='w-75 d-block m-auto cat-img rounded-circle p-4' variant="top" src={customer} />
                                <div className='text-center my-2'>
                                    <div className="stars my-2">
                                        <i className="bi bi-star-fill mx-1"></i>
                                        <i className="bi bi-star-fill mx-1"></i>
                                        <i className="bi bi-star-fill mx-1"></i>
                                        <i className="bi bi-star-fill mx-1"></i>
                                        <i className="bi bi-star-fill mx-1"></i>
                                    </div>
                                    <p>"One happy girl, extremely quick service will for sure be ordering more x"
                                    </p>
                                    <p>Amanda Aldridge</p>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default Reviews;
