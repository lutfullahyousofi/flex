import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import {UserForm} from './components/UserForm';

//import Form from './Form' //form ka closing tag hona ha after functiononclick
//import Voter from './Voter'voter ka closing tag hona ha after functiononclick
import "bootstrap/dist/css/bootstrap.min.css";
//import { Button } from 'react-bootstrap';
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import Media from 'react-bootstrap/Media'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import MyCarousel from "./components/Carousel";
//import Media from "react-bootstrap/Media";

//import Image from "react-bootstrap/Image";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import about from './components/about'

class App extends Component {
  add(){
      return <UserForm />
  }
  add1(){
    return <about />

  }
  render() {
    return (
      <div className="App">
      

        <Alert variant="success">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <img
                  src="/logo.jpg"
                  alt="hello"
                  style={{ width: "10rem" }}
                  round
                  className="float-left"
                />
              </Col>
              <Col xs={6} md={4}>
                <div className="centerd">
                  <Alert.Heading>
                    Islamic Republic Of Afghanistan{" "}
                  </Alert.Heading>
                  <Alert.Heading>
                    <h1>Independent Election Commission</h1>
                  </Alert.Heading>
                </div>
              </Col>

              <Col xs={6} md={4}>
                <img
                  src="/Afghan-logo.png"
                  alt="hi"
                  style={{ width: "10rem" }}
                  class="top-right"
                />
              </Col>
            </Row>
          </Container>
        </Alert>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> Home</Navbar.Brand>
            <Nav className="mr-auto">
              <div>
                <DropdownButton
                  id="dropdown-secondary-button"
                  title="i am(e.g Voter)"
                >
                  <Dropdown.Item href="#/action-2">Administrator</Dropdown.Item>
                  <Dropdown.Item onClick={() => this.add()} >User(Stuff)</Dropdown.Item>
                </DropdownButton>
              </div>

              <Nav.Link href="#Election">Election</Nav.Link>
              <Nav.Link href="#Public Outrech">Public Outrech</Nav.Link>

              <Nav.Link href="#Result">Result</Nav.Link>
              <Nav.Link onClick path='/about' Component={about}>About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <br />
        </>
        <MyCarousel />
        <br />
        <container>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="Discussion.jpg"
                style={{ size: "100px160" }}
              />
              <Card.Body>
                <Card.Title>Meeting Of The Commission's Management</Card.Title>
                <Card.Text>
                  The IEC leadership briefed media on Dermalog’s report on
                  identification of valid and non-standard votes. Mr. Awrangzeb,
                  the IEC Commissioner,......
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">read more..</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="share-info-20191209-lg.jpg" />
              <Card.Body>
                <Card.Title>
                  Meeting of the US Ambassador with the Commission's
                </Card.Title>
                <Card.Text>
                  The Independent Electoral Commission (IEC) Management welcomed
                  US Ambassador Mr. John Bass to the IEC HQ office on 14th
                  October. "We thank the United States for its financial and
                  technical cooperation.....{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">read more...</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="iec-press-20191208-lg.jpg" />
              <Card.Body>
                <Card.Title>
                  Statement by the Independent Election Commission for the
                  National Summit
                </Card.Title>
                <Card.Text>
                  Distinguished members of the IEC and Election Complaints
                  Commission, Distinguished Representatives of the Presidential
                  Candidate, Representatives of Election Observers, Civil
                  Society Organizations, Dear Media and Journalists!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">read more..</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </container>
        <br />
        <Alert variant="success">
          <Container>
            <Row>
              <Col>
                {" "}
                <Alert.Heading>Quick Links</Alert.Heading>
              </Col>
              <Col>
                {" "}
                <Alert.Heading>Contact Information</Alert.Heading>
              </Col>
              <Col>
                {" "}
                <Alert.Heading>Follow Us</Alert.Heading>
                
                <iframe
                  width="160"
                  height="200"
                  src="https://www.youtube.com/embed/JfNjGLGaxR4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>

            <Row>
              <Col>Media Centre</Col>
              <Col>Kabul Afghanistan</Col>
              <Col></Col>
            </Row>

            <Row>
              <Col>Privacy Police</Col>
              <Col>+93-7800000000</Col>
              <Col></Col>
            </Row>

            <Row>
              <Col>Copy right</Col>
              <Col>Election@eca.af</Col>
              <Col></Col>
            </Row>

            <Row>
              <Col>Work with us</Col>
              <Col></Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
        </Alert>
      </div>
    );
  }
}

export default App;
