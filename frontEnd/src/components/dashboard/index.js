import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
const Dashboard = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={4} className="inner-div" >
                        <h1 className="outer">DashBoard</h1>
                        <a className="outer-link" href="/Dashboard">Add Emp</a>
                        <br />
                        <br />
                        <a className="outer-link" href="/emp">Emp List</a>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    );
};
export default Dashboard;