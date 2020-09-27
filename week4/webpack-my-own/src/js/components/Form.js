import React, { Component } from "react";
import ReactDOM from "react-dom";


class Form extends Component {
  constructor() {
    super();
    this.state = {
    
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
    <div> 
    <form>
    <h2>Exercises from 3'rd semester</h2>
    <h5>{this.state.value}</h5>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
      </div>
    );
  }
}


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;

export default Form;


