import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { newArrivals } from '../assets/data/data';
import product from "../assets/images/product.jpg"

class Newarrivals extends Component {
    render() {
        return (
            <div className=' my-5 py-5 text-center'>
                <h3 className=''>New Arrivals</h3>
                <div className='fw-boldmt-2 w-50 m-auto'>
                    <p>Check out all the fantastic new treats just landed here at Candymail HQ</p>
                </div>
                <Container>
                    <Row xs={1} md={4} className="g-4 my-3 p-4">
                        {newArrivals.map((na) => (
                            <Link className='text-decoration-none' to={`${na.id}`}>
                                <Col className=' rounded-0'>
                                    <Card className='shadow-lg border-1 rounded-0' bg="transparent" data-bs-toggle="tooltip" data-bs-placement="top" title={na.name} >
                                        <div className="pointer px-2 pt-2">
                                            <Card.Img height="240px" className='w-100 rounded-0 shadow-sm cover' variant="top" src={na.img} />
                                        </div>
                                        <Card.Body className="p-0 text-center">
                                            <Card.Title className='text-uppercase my-3 fs-6'>{na.name}</Card.Title>
                                            <Card.Text>
                                                <p className='opacity-75 px-3'><small>{na.desc}</small></p>
                                                <strong className='text-danger'>${na.price}</strong>
                                            </Card.Text>
                                            <div className='text-center'>
                                                <button className='rounded-0 py-2 text-uppercase w-100 btn btn-danger '>Add To Cart</button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Link>
                        ))}
                    </Row>
                </Container>
                <button className='btn btn-lg btn-info text-white fs-6 fw-bold rounded-0'><Link to={`/products/newArrivals`} className="text-decoration-none text-white">View All</Link></button>
            </div>
        );
    }
}

export default Newarrivals;
