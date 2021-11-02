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
		<div className='sub-nav-title' onClick={() => setIsOpen(!isOpen)}>
			<span className='puce'>{isOpen ? '▾' : '▸'}</span>
			<span className='name'>{name}</span>
		</div>
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
			<NavLink to='/' exact>Home</NavLink>
			<Subnav name='sub'>
				<NavLink to='open-1'>open 1</NavLink>
				<NavLink to='open-2'>open 2</NavLink>
			</Subnav>
			<Subnav name='test'>
				<NavLink to='test-1'>test 1</NavLink>
				<NavLink to='test-2'>test 2</NavLink>
			</Subnav>
			<NavLink to='/content'>Content</NavLink>
			<NavLink to='/about'>About</NavLink>
		</nav>
	)
}

export default Navbar;
