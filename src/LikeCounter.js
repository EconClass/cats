import React, { Component } from "react";
import './LikeCounter.css';


class LikeCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.count}</button>
      </div>
    )
  }
}

export default LikeCounter;