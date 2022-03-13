import React, { Component } from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import SideCanvas from './SideCanvas';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            component: ""
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    handleShow(component) {
        this.setState({
            show: true,
            component: component
        })
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div className='py-2 bg-dark-theme border-theme'>
                <Navbar
                    className="px-2"
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                >
                    <Navbar.Brand><Link to="/" className='text-decoration-none text-white fw-bold fs-2'>Candy<span className='text-danger'>Shop</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <SideCanvas
                        show={this.state.show}
                        handleClose={this.handleClose}
                        component={this.state.component}
                    />
                </Navbar>
                <div className='bg-dark-theme my-2'  >
                    <div className='d-flex justify-content-end align-items-center '>
                        <button
                            className='btn btn-info px-3 pointer rounded'
                            onClick={() => this.handleShow("search")}
                        >
                            <i className="bi bi-search"></i> Search
                        </button>
                        <div onClick={() => this.handleShow("login")}
                            className='px-3 pointer'>
                            <i className="bi bi-person-fill header-icon"></i> Account
                        </div>
                        <Link to="/cart" className='text-decoration-none text-white'>
                            <div
                                className='px-2 pointer'
                            >
                                <span className=' d-flex align-items-center'>
                                    <i className="bi bi-cart header-icon fs-3"></i><Badge bg="info">{6}</Badge>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;
