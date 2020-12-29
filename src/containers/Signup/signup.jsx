import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Adminheader from "../Admin_Header/adminheader";
import { connect } from "react-redux";
import { signup } from "../../store/actions/authActions";

class Signup extends React.Component {
  state = {
    fullname: "",
    email: "",
    password: "",
    error: {},
  };
    
  //getDerivedStateFromProps() through this lifecycle method we are able to bring the error from store to this signup component state
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

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    let { fullname, email, password } = this.state; //Destructuring
    //call the signup authaction method
    this.props.signup({ fullname, email, password }, this.props.history);
  };

  render() {
    let { fullname, email, password, error } = this.state;
  //  console.log(this.props);
    return (
      <Fragment>
        <Adminheader />
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={this.submitHandler}>
                <div className='form-group'>
                  <label htmlFor="fullname">FullName</label>
                  <input
                    type="text"
                    className={
                      error.fullname
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    placeholder="Enter your name"
                    name="fullname"
                    id="name"
                    value={fullname}
                    onChange={this.changeHandler}
                  />
                  { error.fullname && <div className="invalid-feedback">{error.fullname}</div>}
                </div>
                
                <div className='form-group'>
                  <label htmlFor="email">Email id</label>
                  <input
                    type="email"
                    className={
                      error.email ? "form-control is-invalid" : "form-control"
                    }
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.changeHandler}
                  />
                  {error.email && <div className="invalid-feedback">{error.email}</div>}
                </div>
                <div className='form-group'>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={
                      error.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={this.changeHandler}
                  />
                 { error.password && <div className="invalid-feedback">{error.password}</div>}
                </div>
                <Link to="/Login">Already Have an Account? Login Here</Link>
                <Button variant="primary my-3 d-block" type="submit">
                  Register
                </Button>
              </Form>
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

export default connect(mapStateToProps, { signup })(Signup);
