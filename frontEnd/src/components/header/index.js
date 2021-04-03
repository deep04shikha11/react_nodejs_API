import React from "react";
import { Navbar, Container } from 'react-bootstrap';
const Header = () => (
    // <nav className="navbar navbar-dark bg-dark">
    //     <div className="container">
    //         <div className="navbar-brand">
    //             <span className="h4"> EMP Mgmt</span>
    //         </div>
    //     </div>
    // </nav>

    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="/auth">
                <h4>EMP Mgmt</h4>
            </Navbar.Brand>
        </Container>
    </Navbar>
)
export default Header;