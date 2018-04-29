import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FoodBrowser from './FoodBrowser'
import SearchFoods from './SearchFoods'
import Menu from './Menu'

const APIKEY = 'pBwrrbNvpNaPS1uNj8MBl0bNOyGtDq6yOGWxeY8v'

class App extends Component {

  constructor() {
    super()
    this.state = {
      foods: [],
      menuItems: [],
      searchTerm: 'peanut'
    }
  }

  fetchFoods = () => {
    let url = `https:/\/api.nal.usda.gov/ndb/search?format=json&q=${this.state.searchTerm}&api_key=${APIKEY}`
    console.log(url)
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }

    }).then(r=>r.json()).then(json=>this.setState({foods:json.list.item}))
    
  }

  submitSearch = (e) => {
    e.preventDefault()
    // this.setState({searchTerm: e.target.search_term.value})
    this.state.searchTerm = e.target.search_term.value
    console.log('Search Term:', this.state.searchTerm)
    this.fetchFoods()
    console.log('Search Term:', this.state)
    e.target.reset()
  }

  addItem = (e) => {
    e.preventDefault()
    let item = this.state.foods.find(food => food.name === e.target.value)
    this.setState({menuItems: [...this.state.menuItems, item]})
  }

  deleteItem = (e) => {
    e.preventDefault()
    let item = this.state.foods.find(food => food.name === e.target.value)
    this.setState({menuItems: [...this.state.menuItems.filter(i => i !== item)]})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Menu App</h1>
        </header>
        <br/>
        <div className="food-search">
          <SearchFoods submitSearch={this.submitSearch}/>
          <FoodBrowser foods={this.state.foods} addItem={this.addItem}/>
          
        </div>
        <Menu menuItems={this.state.menuItems} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
