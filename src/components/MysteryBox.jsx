import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Threedots from './shared/ThreeDots';
import bg from "../assets/images/mystery1.jpg"

class Mysterybox extends Component {
    render() {
        return (
            <div className=' py-5 bg-blue-theme text-center'>
                <h3 className='text-white'>Mystery Box</h3>
                <Threedots />
                <div className='fw-bold text-white mt-2 w-50 m-auto'>
                    <p>Spend £25 on treats and you can add one of these American Kit Kats to your cart absolutely Free!</p>

                    <p>Just add one to your cart and when you spend £25 this will be automatically be discounted 100%!</p>

                    <p>Not in conjunction with any other offer!</p>

                    <p>To receive your free Item they must be added to the cart!</p>

                    <p>Offer Ends Midnight 08/03/22</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <Card bg="transparent" className='border-0 p-4'>
                                <div className='d-flex flex-column card-top'>
                                    <div className="card-img">
                                        <Card.Img className='w-100' variant="top" src={bg} />
                                    </div>
                                    <div className='text-center my-2'>
                                        <button className='btn btn-warning'>Add To Cart</button>
                                    </div>
                                </div>
                                <Card.Body className='text-white'>
                                    <Card.Title>American Candy Mega</Card.Title>
                                    <Card.Text>
                                        <strong>&#163;49.65</strong>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <button className='btn btn-lg btn-warning'>View All</button>
            </div>
        );
    }
}

export default Mysterybox;
