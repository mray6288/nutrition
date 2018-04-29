import React from 'react'

const Food = (props) => {

	let name = props.food.name.toLowerCase()
	if (name.includes('upc')){
		name = name.substring(0, name.indexOf(', upc'))
	}
	if (name.includes('gtin')){
		name = name.substring(0, name.indexOf(', gtin'))
	}

	return <li className='food'>
	{name}
	<button onClick={props.actionItem} value={props.food.name}>{props.actionType}</button> </li>


}

export default Food