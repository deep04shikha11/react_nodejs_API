import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <React.Fragment>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col></Col>
                    <Col xs={6} className="outer-div">
                        <h1 className="outer">Company Login</h1>
                        <br />
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group as={Row} controlId="validationCustomEmail">
                                <Form.Label column sm={2}> Email </Form.Label>
                                <Col sm={10}> <Form.Control required noValidate value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" Enter Email" />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Email is required.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Row} controlId="validationCustomPassword">
                                <Form.Label column sm={2}> Password </Form.Label>
                                <Col sm={10}>
                                    <Form.Control required type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Password is required.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Login</Button>
                                    <a className="float-right outer-link" href="/register">Register Here to Create Account</a>
                                </Col>
                            </Form.Group>
                        </Form>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default LoginForm;