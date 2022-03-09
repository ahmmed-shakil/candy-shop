import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



class Header extends Component {

    render() {
        return (
            <div className='py-2 bg-dark-theme border-theme'>
                <Navbar
                    className="px-2"
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                >
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                </Navbar>
                <div className='bg-dark-theme my-2'  >
                    <div className='d-flex justify-content-end align-items-center '>
                        <button
                            className='btn btn-warning px-3 pointer rounded'
                        >
                            <i className="bi bi-search"></i> Search
                        </button>
                        <div
                            className='px-3 pointer'>
                            <i className="bi bi-person-fill header-icon"></i> Account
                        </div>
                        <div
                            className='px-2 pointer'
                        >
                            <i className="bi bi-cart header-icon"></i> cart
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
