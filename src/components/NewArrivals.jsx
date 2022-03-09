import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Threedots from './shared/ThreeDots';
import bg from "../assets/images/mystery1.jpg"

class Newarrivals extends Component {
    render() {
        return (
            <div className=' py-5 bg-danger text-center'>
                <h3 className='text-white'>New Arrivals</h3>
                <Threedots />
                <div className='fw-bold text-white mt-2 w-50 m-auto'>
                    <p>Check out all the fantastic new treats just landed here at Candymail HQ</p>
                </div>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card data-bs-toggle="tooltip" data-bs-placement="top" title="American Candy Mega" bg="transparent" className='border-0 p-4'>
                                <div className='d-flex flex-column card-top'>
                                    <div className="card-img-arrival">
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

export default Newarrivals;
