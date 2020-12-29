import { Component } from "react";

import "./header.style.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="dropdown user user-menu open ml-auto">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="user-image"
                  alt="User Image"
                />
                <span className="hidden-xs ml-auto">User</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" classname="btn btn-default btn-flat">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" classname="btn btn-default btn-flat">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" classname="btn btn-default btn-flat">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
