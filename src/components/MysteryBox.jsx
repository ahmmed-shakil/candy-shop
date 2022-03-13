import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Threedots from './shared/ThreeDots';
import product from "../assets/images/product.jpg"
import { chocMysteryData } from '../assets/data/data';

class Mysterybox extends Component {
    render() {
        return (
            <div className=' py-5  text-center'>
                <h3 className=''>Mystery Box</h3>
                <Threedots />
                <div className='fw-bold mt-2 w-50 m-auto'>
                    <p>Spend £25 on treats and you can add one of these American Kit Kats to your cart absolutely Free!</p>

                    <p>Just add one to your cart and when you spend £25 this will be automatically be discounted 100%!</p>

                    <p>Not in conjunction with any other offer!</p>

                    <p>To receive your free Item they must be added to the cart!</p>

                    <p>Offer Ends Midnight 08/03/22</p>
                </div>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {chocMysteryData.map((choc) => (
                            <Col >
                                <Card className='shadow-lg border-1' bg="transparent" data-bs-toggle="tooltip" data-bs-placement="top" title="American Candy Mega" >
                                    <div className='card-img'>
                                        <Card.Img height="300px" className='w-100 border-3 cover shadow-sm' variant="top" src={choc.img} />
                                    </div>
                                    <Card.Body className="">
                                        <Card.Title className=' opacity-75'>{choc.name}</Card.Title>
                                        <Card.Text className=' opacity-75'>
                                            <strong>&#163;{choc.price}</strong>
                                        </Card.Text>
                                        <div className='text-center my-2'>
                                            <button className='btn btn-danger rounded-pill'>Add To Cart</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <button className='btn btn-lg btn-info fw-bold fs-6 text-white my-5 rounded-pill'>View All</button>
            </div>
        );
    }
}

export default Mysterybox;
