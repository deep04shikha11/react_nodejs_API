import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
const EmpAdd = () => {
    const [validated, setValidated] = useState(false);
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [name, setEname] = useState('');
    const [contact, setContact] = useState('');

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
                    <Col xs={6} className="inner-div">
                        <h1 className="outer">Add New Employee</h1>
                        <br />
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}> Name </Form.Label>
                                <Col sm={10}> <Form.Control noValidate required type="text" placeholder="Name" value={name} onChange={(e) => setEname(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalAge">
                                <Form.Label column sm={2}> Age </Form.Label>
                                <Col sm={10}> <Form.Control noValidate required type="text" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalSalary">
                                <Form.Label column sm={2}> Salary </Form.Label>
                                <Col sm={10}> <Form.Control noValidate required type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPhone">
                                <Form.Label column sm={2}> Contact </Form.Label>
                                <Col sm={10}> <Form.Control noValidate required type="text" placeholder="Phone" value={contact} onChange={(e) => setContact(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 6, offset: 6 }}>
                                    <Button type="submit" variant="success">Save</Button>
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
export default EmpAdd;