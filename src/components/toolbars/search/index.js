import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export default function index() {
	return (
		<>
			<form className='navigation__search' method='get'>
				<input type='text' name='search' id='search' placeholder='Поиск...' />
				<button className='navigation__search-btn' value='Поиск'>
					<RiSearch2Line />
				</button>
			</form>
		</>
	)
}
