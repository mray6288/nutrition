import React from 'react'

import Food from './Food'


const FoodBrowser = (props) => {

	let allFoods = props.foods.map(food => {
		return <Food food={food} addItem={props.addItem} />
	})

	return (
		<ul className='food-list'>
		{allFoods}
		</ul>
		)
		
	
}

export default FoodBrowser
