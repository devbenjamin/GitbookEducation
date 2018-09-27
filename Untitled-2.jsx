import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      listItem: {item: '', checked: false}
    };
  }

  deleteItem = (e, item) => {
    let list = this.state.list
    let newList = list.filter(listItem => listItem !== item)
    this.setState({list: newList})
  }

  checkItem = (e, item) => {
    let list = this.state.list
    let newList = list.map(listItem => {
      listItem === item ? listItem.checked = !listItem.checked : listItem
      return listItem
    })
    this.setState({list: newList})
  }
  
  handleChange = e => {
    this.setState({ listItem: {item: e.target.value, checked: false}});
  }

  handleSubmit = e => {
    e.preventDefault()
    let listArray = this.state.list
    listArray.push(this.state.listItem)
    this.setState({list: listArray})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button type="submit">+</button>
        </form>
          {this.state.list.map((item, index) => {
            return(
              <ListItem item={item} key={index} 
              deleteItem={this.deleteItem} checkItem={this.checkItem} />
            )
          })}
      </div>
    );
  }
}
