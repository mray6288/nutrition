import React from 'react'

import Nutrient from './Nutrient'

const MenuItem = (props) => {

	let name = props.food.name.toLowerCase()
	if (name.includes('upc')){
		name = name.substring(0, name.indexOf(', upc'))
	}
	if (name.includes('gtin')){
		name = name.substring(0, name.indexOf(', gtin'))
	}

	let nutrients = props.food.nutrients.map(nutrient => {
		return <Nutrient nutrient={nutrient}/>
	})

	return (<li className='food'>
	<h3>{name}</h3>
	{props.showIngredients ? 
	<p><strong>Ingredients:</strong> {props.food.ing.desc.toLowerCase()}</p>

	: ''}
	{props.showNutrition ? 
	<table>
	<thead><tr>
	<th align='right'>Nutrient</th>
	<th>Amount</th>
	</tr></thead>
	<tbody>{nutrients}</tbody>
	</table>

	: ''}
	<button onClick={props.clickIngredients} value={props.food.ndbno}>{props.showIngredients ? 'Hide' : 'Show'} Ingredients</button>
	<button onClick={props.clickNutrition} value={props.food.ndbno}>{props.showNutrition ? 'Hide' : 'Show'} Nutrition</button>
	<button onClick={props.deleteItem} value={props.food.ndbno}>Delete Food</button> </li>
	)

}

export default MenuItem