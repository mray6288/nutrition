import React from 'react'


const SearchFoods = (props) => {

	return (
	<form onSubmit={props.submitSearch}>
		Food Name: <input type='textbox' name='search_term'/>
		<input type='submit'/>
	</form>
	)


}

export default SearchFoods