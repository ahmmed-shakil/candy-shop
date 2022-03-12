import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Threedots from './shared/ThreeDots';
import bg from "../assets/images/mystery1.jpg"

class CategoriesSection extends Component {
    render() {
        return (
            <div className=' py-5 bg-blue-theme text-center'>
                <h3 className='text-white'>Build A Box of Treats</h3>
                <Threedots />
                <div className='fw-bold text-white mt-2 w-50 m-auto'>
                    <p>Click on the Red Boxes to Buy American Sweets and more! Build your order here from a range of Imported sweets, snacks, sodas, and cakes!</p>
                </div>
                <Row xs={1} md={2} className="g-4 p-3">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card className='position-relative border-0' >
                                <div className='d-flex flex-column'>
                                    <Card.Img height="300px" className='cat-img' variant="top" src={bg} />
                                    <div className='overlay'>

                                    </div>
                                    <div className='text-center my-2 position-absolute top-50 start-50 translate-middle'>
                                        <button className='btn btn-danger border-0'>All Products-</button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default CategoriesSection;
