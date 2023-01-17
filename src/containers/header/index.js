import React from 'react'
import Alerts from '../../components/toolbars/alerts'
import Menu from '../../components/toolbars/menu'

export default function index() {
	return (
		<div className='header'>
			<Menu />
			<h1>TRAP</h1>
			<Alerts />
		</div>
	)
}
