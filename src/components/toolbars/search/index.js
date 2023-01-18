import React from 'react'
import styles from './index.module.scss'

import { RiSearch2Line } from 'react-icons/ri'

export default function Search() {
	return (
		<>
			<form className={styles.search} method='get'>
				<input type='text' name='search' id='search' placeholder='Поиск...' />
				<button className={styles.search_btn} value='Поиск'>
					<RiSearch2Line />
				</button>
			</form>
		</>
	)
}
