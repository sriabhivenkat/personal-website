import React, {useState} from 'react';
import './Navbar.css'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Container} from 'react-bootstrap';
import './Landing.css';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

function NavbarComp() {
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        me!
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    );
}


export default NavbarComp;