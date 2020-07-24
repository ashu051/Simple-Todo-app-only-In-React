import React, { Component } from "react";

import Output from "../src/Output";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newText = this.state.text;
    if (newText !== "") {
      const item = [...this.state.list, newText];
      console.log(item);
      this.setState({
        list: item,
        text: "",
      });
    }
  }

  render() {
    return (
      <div>
        <form class="form-inline" onClick={this.onSubmit}>
          <div
            class="form-group mx-sm-2 mb-2 m-50"
            style={{ marginLeft: "50px" }}
          >
            <label for="inputPassword2" class="sr-only"></label>
            <input
              type="text"
              className={"form-control form-control-lg"}
              placeholder="Add Todo"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" class="btn btn-primary mb-.5">
            Add
          </button>
        </form>
        <Output list={this.state.list} />
      </div>
    );
  }
}

export default Input;
