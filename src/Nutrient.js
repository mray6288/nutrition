import React from 'react'

const Nutrient = (props) => {


	return (<tr>
	<td>{props.nutrient.name}</td>
	<td >{props.nutrient.value} {props.nutrient.unit}</td>
	</tr>
	)
}

export default Nutrient