import React, { Component } from "react";
import { Container, Row, Card, InputGroup, FormControl } from "react-bootstrap";
import firebase from "firebase";
import storage from "../../firebase/config.js";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <Container className="center">
          <Row>
            <Card className="justify-content-md-center">
              <Card.Body>
                <br />
                <br />
                <br />
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" onChange={this.handleChange} />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
                <button
                  onClick={this.handleUpload}
                  className="waves-effect waves-light btn"
                >
                  Upload
                </button>
                <br />
                <br />
                <img
                  src={this.state.url || "https://via.placeholder.com/400x300"}
                  alt="Uploaded Images"
                //   height="300"
                //   width="400"
                />
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}
