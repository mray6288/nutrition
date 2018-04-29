import React, { Component } from 'react';
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
      searchTerm: '',

    }
  }

  saveFoods = (foods) => {
    if (foods.list){
      this.setState({foods:foods.list.item})
    } else {
      alert(`No Foods Found For "${this.state.searchTerm}" - please try again`)
    }
  }

  fetchFoods = () => {
    let url = `https://api.nal.usda.gov/ndb/search?format=json&q=${this.state.searchTerm}&api_key=${APIKEY}`
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }

    }).then(r=>r.json()).then(json=>this.saveFoods(json))
    
  }

  fetchNutrition = (id) => {
    let url = `https://api.nal.usda.gov/ndb/reports?format=json&ndbno=${id}&api_key=${APIKEY}`
    console.log(url)
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }

    }).then(r=>r.json()).then(json=>this.setState({menuItems: [...this.state.menuItems, json.report.food]}))
    
  }

  onChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  submitSearch = (e) => {
    e.preventDefault()
    // this.setState({searchTerm: e.target.search_term.value})
    
    this.fetchFoods()
    e.target.reset()
  }

  addItem = (e) => {
    e.preventDefault()
    this.fetchNutrition(e.target.value)
  }

  deleteItem = (e) => {
    e.preventDefault()
    let item = e.target.value
    this.setState({menuItems: [...this.state.menuItems.filter(i => i.ndbno !== item)]})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Menu App</h1>
        </header>
        <br/>
        <div className="food-search">
          <h1>Food Search</h1>
          <SearchFoods submitSearch={this.submitSearch} onChange={this.onChange}/>
          <FoodBrowser foods={this.state.foods} addItem={this.addItem}/>
          
        </div>
        <Menu menuItems={this.state.menuItems} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
