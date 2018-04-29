import React from 'react'

import MenuItem from './MenuItem'

export default class Menu extends React.Component {
	constructor() {
		super()
		this.state = {
			showIngredients: [],
			showNutrition: [],
		}
	}

	clickIngredients = (e) => {
		let id = e.target.value
		let newIngredients = []
		if (this.state.showIngredients.includes(id)){
			newIngredients = [...this.state.showIngredients.filter(i => i !== e.target.value)]
		} else {
			newIngredients = [...this.state.showIngredients, e.target.value]
		}
		this.setState({
			showIngredients: newIngredients
		})
	}

	clickNutrition = (e) => {
		let id = e.target.value
		let newNutrition = []
		if (this.state.showNutrition.includes(id)){
			newNutrition = [...this.state.showNutrition.filter(i => i !== e.target.value)]
		} else {
			newNutrition = [...this.state.showNutrition, e.target.value]
		}
		this.setState({
			showNutrition: newNutrition
		})
	}


	render () {
		let menuItems = this.props.menuItems.map(food => {
			return <MenuItem food={food} deleteItem={this.props.deleteItem} showIngredients={this.state.showIngredients.includes(food.ndbno)} showNutrition={this.state.showNutrition.includes(food.ndbno)} clickIngredients={this.clickIngredients} clickNutrition={this.clickNutrition}/>
		})

		return (
			<div className='menu'>
				<h1>Current Menu</h1>
				<ul>
					{menuItems}
				</ul>
			</div>
		)
	}


}

