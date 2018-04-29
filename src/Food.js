import React from 'react'

const Food = (props) => {

	let name = props.food.name.toLowerCase()
	if (name.includes('upc')){
		name = name.substring(0, name.indexOf(', upc'))
	}
	if (name.includes('gtin')){
		name = name.substring(0, name.indexOf(', gtin'))
	}
	if (name.length > 96){
		name = name.slice(0, 91) + ' . . .'
	}

	return <li className='food'>
	{name}
	<button className='add-button' onClick={props.addItem} value={props.food.ndbno}>Add Food >>></button> <br/></li>


}

export default Food