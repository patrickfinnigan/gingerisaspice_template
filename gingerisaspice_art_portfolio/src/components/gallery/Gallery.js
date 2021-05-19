import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import firebase from "firebase";
import storage from "../../firebase/config.js";

export default class Gallery extends Component {
  render() {
    return (
      <Container className="center">
        <Row>
          <Col xs={6} md={4}>
            <Image src={"./images/molly0.png"} alt="image not found"/>
          </Col>
          <Col xs={6} md={4}>
            <Image src="images/1.png" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="images/2.png" thumbnail />
          </Col>
        </Row>
      </Container>
    );
  }
}


// how the fucking shit are images suppose to work on this damn thing