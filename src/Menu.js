import React from 'react'

import Food from './Food'

const Menu = (props) => {

	let menuItems = props.menuItems.map(food => {
		return <Food food={food} actionItem={props.deleteItem} actionType='Remove Food'/>
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

export default Menu