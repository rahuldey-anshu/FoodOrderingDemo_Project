import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.style.css";
import LoginImg from "../../asset/image/logo.png";
import Adminheader from "../Admin_Header/adminheader";
import { login } from "../../store/actions/authActions.js";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.auth.error,
      };
    }
    return null;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state; //Destructuring
    //call the login authaction method
    this.props.login({ email, password }, this.props.history);
  };

  render() {
    let { email, password, error } = this.state;

    return (
      <Fragment>
        <Adminheader />
        <Container>
          <Row style={{ marginTop: "30px" }}>
            <Col md={{ span: 6, offset: 3 }}>
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
                  <div className="form-group">
                    {/* <label htmlFor='email'>Email: </label> */}
                    <input
                      type="email"
                      className={
                        error.email ? "form-control is-invalid" : "form-control"
                      }
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    {error.email && (
                      <div className="invalid-feedback">{error.email}</div>
                    )}
                  </div>

                  {/* <Form.Group>
                    <Form.Control
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group> */}
                  <div className="form-group">
                    {/* <label htmlFor='password'>Password: </label> */}
                    <input
                      type="password"
                      className={
                        error.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="Password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {error.password && (
                      <div className="invalid-feedback">{error.password}</div>
                    )}
                  </div>

                  {/* <Form.Group>
                    <Form.Control
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group> */}
                  <Link to="/Signup">Don't Have any Account? Signup Here</Link>

                  <Button
                    className="btn btn-primary my-3 d-block btn-block btn-lg"
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { login })(Login);
