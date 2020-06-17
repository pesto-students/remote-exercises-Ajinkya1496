import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    itemList: groceryList,
    name: '',
    qnty: 0,
    price: 0,
    offer: '',
  }

  addItem(item) {
    this.state.itemList.push(item);
  }

  handleDelete(id) {
    let items = this.state.itemList.filter((_, index )=> index !== id)
    this.setState({itemList: items});
  }

  handleInput = (event) => {
    switch(event.target.name) {
      case 'name':
        this.setState({name: event.target.value});
        break;
      case 'qnty':
        this.setState({qnty: event.target.value});
        break;
      case 'price':
        this.setState({price: event.target.value});
        break;
      case 'offer':
        this.setState({offer: event.target.value});
        break;
    }
  }

  handleSubmit = (event) => {
    let items = [...this.state.itemList];
    let repeatItem = this.state.itemList.filter(item => item.name.toLowerCase() === this.state.name.toLowerCase());
    if(repeatItem.length === 0) {
      items.push({
        name: this.state.name,
        qnty: parseInt(this.state.qnty),
        price: parseInt(this.state.price),
        offer: this.state.offer
      });
    }
    else {
      let { name, qnty, price, offer } = repeatItem[0];
      let index = items.indexOf(repeatItem[0]);
      items[index] = { name: name, qnty: qnty+parseInt(this.state.qnty), price: parseInt(this.state.price), offer: this.state.offer }
    }
    this.setState({itemList: items})
    document.getElementById("form").reset();
    event.preventDefault();
  }

  handlerReset = () => {
    this.setState({itemList: []});
  }
  
  render() {
    return (
      <>
        <button className="margin-top margin-bottom" onClick={this.handlerReset}>Reset list</button>
          <table border={1}>
            <thead>
              <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Offer</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {this.state.itemList.map((item, index )=> {
              return (
                <tr key={index} className="align-center">
                  <td>{index+1}</td>
                  <td>{item["name"]}</td>
                  <td>{item["qnty"]}</td>
                  <td>{item["price"]}</td>
                  <td>{item["offer"]}</td>
                  <td><button onClick={ () => this.handleDelete(index)}>Delete</button></td>
                </tr>
              )
            })}
            </tbody>
          </table>
          <div>
            <h3 className="margin-top">Add item in the list</h3>
            <form id="form" onSubmit={this.handleSubmit}>
                <input name="name" placeholder="Name" onChange={this.handleInput} required/>
                <input name="qnty" placeholder="Quantity" onChange={this.handleInput} required/>
                <input name="price" placeholder="Price" onChange={this.handleInput} required/>
                <input name="offer"  placeholder="Offer" onChange={this.handleInput} required/>
                <button type="submit">Add Item</button>
            </form>
          </div>
      </>
    );
  }
  
}

let groceryList = [
  {
    name: "Milk",
    qnty: 10,
    price: 100,
    offer: "NA"
  },
  {
    name: "Protein",
    qnty: 3,
    price: 100,
    offer: "NA"
  },
]

export default App;
