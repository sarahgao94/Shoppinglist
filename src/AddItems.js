import React, { Component } from "react";

class AddItems extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.content) {
      alert("Please enter an item");
      return;
    }
    this.props.addItems(this.state);

    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div className="additems">
        <form onSubmit={this.handleSubmit}>
          <label>Add items:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button onClick={this.handleSubmit}>Confirm</button>
        </form>
      </div>
    );
  }
}
export default AddItems;
