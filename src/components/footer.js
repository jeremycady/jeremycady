import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>&copy; 2020, All Rights Reserved - {this.props.siteName}</span>
        </div>
      </div>
    );
  }
}
