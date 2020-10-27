import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
              {/* unComment if/when logo file is added to contentful */}
                {/* {data.logo.file.url} ? (
                ) : ( */}
                  <span>{data.siteName}</span>
                {/* )} */}
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/#home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Testimonials`}>Testimonials</Link>
                        </li>
                      );
                    })}
                    {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li>
                          <Link to="/#Contact">Contact</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/#home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Testimonials`}>Testimonials</Link>
                        </li>
                      );
                    })}
                  {data.menus
                  .filter(item => item === "Contact")
                  .map(t => {
                    return (
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
