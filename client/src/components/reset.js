import React, { Component } from "react";
import "./reset.css"; 

export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    console.log(email);
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
      });
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Forgot Password</h3>
            <h3>A password reset link will be sent to the provided email</h3>
            <h3>please do check your gmail!!</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
            <p className="links">
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
