import React, { Component } from "react";

class Demo2 extends Component {
  constructor() {
    super();

    this.state = {
      name: "React",
    };

    this.onValueChange = this.onValueChange.bind(this);

    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();

    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>

        <div>Selected option is : {this.state.selectedOption}</div>

        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Demo2;
