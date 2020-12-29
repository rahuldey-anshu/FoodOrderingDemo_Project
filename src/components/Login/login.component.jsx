import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.style.css";
import LoginImg from "../../asset/image/logo.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errusername: "",
    errpassword: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="LoginBox pt-lg-3 pl-lg-2">
                <img className="LoginImg" src={LoginImg} />
                <Form onSubmit={this.handleSubmit}>
                  <center>
                    <font color="red">
                      <p class="login-box-msg">
                        {" "}
                        <i className="fa fa-arrow-circle-down"></i> Sign in
                        below <i className="fa fa-arrow-circle-down"></i>
                      </p>
                    </font>
                  </center>

                  <Form.Group>
                    <Form.Control
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Button
                    className="btn btn-primary btn-block btn-lg"
                    variant="primary"
                    type="submit"
                    onSubmit={this.handleSubmit}
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Login;
