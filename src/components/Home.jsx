import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>Welcome to School Management System</h1>
          <p>Your go-to platform for managing and exploring educational institutions effortlessly.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>What We Offer</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Easy School Data Management</Card.Title>
              <Card.Text>
                Add new schools to our database with ease. Our intuitive form allows you to input and store detailed information about schools, including names, addresses, contact details, and images.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Comprehensive School Directory</Card.Title>
              <Card.Text>
                Browse through a comprehensive list of schools. Our platform showcases essential details like school names, addresses, cities, and images, making it easy for you to find the information you need at a glance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>User-Friendly Interface</Card.Title>
              <Card.Text>
                Designed with you in mind, our application features a responsive design that works seamlessly on both desktop and mobile devices. Whether you’re adding data or exploring our school directory, enjoy a smooth and efficient experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Secure and Reliable</Card.Title>
              <Card.Text>
                Your data is safely stored and managed. We ensure a secure environment for your school information, making sure your data is protected and accessible only to authorized users.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Explore the possibilities with our School Management System and streamline your school data management today!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
