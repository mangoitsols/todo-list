import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      id: uuid(),
      editItem: false,
      item: ""
    });
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filterData = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filterData
    });
  };

  handleEdit = id => {
    const filterData = this.state.items.filter(item => item.id !== id);
    const newData = this.state.items.find(item => item.id === id);

    this.setState({
      items: filterData,
      item: newData.title,
      id: id,
      editItem: true
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo List</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
