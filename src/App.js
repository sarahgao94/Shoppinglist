import React, { Component } from "react";
import Items from "./Items";
import AddItems from "./AddItems";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { content: "tomato", id: 1 },
      { content: "cheese", id: 2 },
    ],
  };
  deleteItems = (id) => {
    const items = this.state.items.filter((item) => id !== item.id);
    this.setState({
      items,
    });
  };
  addItems = (item) => {
    item.id = Math.random();
    let items = [...this.state.items, item];

    this.setState({
      items,
    });
  };
  render() {
    return (
      <div className="shoppinglist container">
        <h1 className="center purple-text"> Shopping List</h1>
        <Items items={this.state.items} deleteItems={this.deleteItems} />
        <AddItems addItems={this.addItems} />
      </div>
    );
  }
}

export default App;
