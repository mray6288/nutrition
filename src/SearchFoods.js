import React from 'react'


const SearchFoods = (props) => {

	return (
	<form onSubmit={props.submitSearch}>
		Find Food: <input type='textbox' name='search_term' onChange={props.onChange}/>
		<input type='submit'/>
	</form>
	)


}

export default SearchFoods