import React, { ReactNode, useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import './Navbar.scss'

interface I_Subnav {
	name: string,
	children: ReactNode
}
function Subnav({ name, children }: I_Subnav) {
	const [isOpen, setIsOpen] = useState(false)
	return (<>
		<li onClick={() => setIsOpen(!isOpen)}>{name}</li>
		{isOpen && <div className='sub-nav'>
			{children}
		</div>}
	</>)
}

function Navbar() {
	const [active, setActive] = useState('')
	const [isTestOpen, setIsTestOpen] = useState(true)

	return (
		<nav id='main-navbar'>
			<ul>
				<li><NavLink to='/' exact>Home</NavLink></li>
				<li><NavLink to='/about'>About</NavLink></li>
				<Subnav name='sub'>
					<li>open</li>
					<li>open 2</li>
				</Subnav>
				<Subnav name='test'>
					<li>test 1</li>
					<li>test 2</li>
				</Subnav>
				<li><NavLink to='/content'>Content</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navbar;
