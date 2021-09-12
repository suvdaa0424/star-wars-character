import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Star Wars Characters</Navbar.Brand>
                <Link to="/">Home</Link>
                <Link to="/characters">Characters</Link>
            </Container>
        </Navbar>
    )
}

export default Header
