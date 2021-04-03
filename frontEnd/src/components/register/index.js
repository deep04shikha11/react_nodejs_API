import React, { useState } from "react";
import { connect } from 'react-redux';
import { registerCompany } from "../../redux/actions/authActionCreator";

import { Row, Col, Container, Form, Button } from 'react-bootstrap';
const RegisterForm = ({ dispatchRegisterAction }) => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setFname] = useState('');
    const [phone, setContact] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        dispatchRegisterAction(companyName, email, password, phone,
            () => console.log('Company registered successfully'),
            (message) => console.log(`Error using this: ${message}`));
    };
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col></Col>
                    <Col xs={6} className="outer-div">
                        <h1 className="outer">Company Registration</h1>
                        <br />
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}> Name </Form.Label>
                                <Col sm={10}> <Form.Control noValidate required type="text" placeholder="Name" value={companyName} onChange={(e) => setFname(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}> Email </Form.Label>
                                <Col sm={10}> <Form.Control noValidate required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPhone">
                                <Form.Label column sm={2}> Contact </Form.Label>
                                <Col sm={10}> <Form.Control noValidate required type="text" placeholder="Phone" value={phone} onChange={(e) => setContact(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}> Password </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" noValidate required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} variant="mx-2">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Register</Button>
                                    <a className="float-right outer-link" href="/login">Already registered ? Login</a>
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
const mapDispatchToProps = dispatch => ({
    dispatchRegisterAction: (companyName, email, password, phone, onSuccess, onError) =>
        dispatch(registerCompany({ companyName, email, password, phone, onSuccess, onError }))
});
export default connect(null, mapDispatchToProps)(RegisterForm);