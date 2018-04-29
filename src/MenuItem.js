import React from 'react'

const MenuItem = (props) => {


	return <li className='food'>
	{props.food.name}
	<button onClick={props.deleteItem} value={props.food.name}>Delete Food</button> </li>


}

export default MenuItem