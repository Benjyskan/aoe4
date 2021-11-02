import React, { useState } from 'react'
import './aside.scss'

// function Aside({ isDisplayed, setIsDisplayed }) {
function Aside() {



	const [isDisplayed, setIsDisplayed] = useState(true)

	function handleToggle() {
		setIsDisplayed(!isDisplayed)
	}

	return (
		<aside className={isDisplayed ? 'visible' : 'hidden'}>
			<div id={'side-toggle-btn'} onClick={handleToggle}>{isDisplayed ? '>' : '<'}</div>
			{isDisplayed &&
				<p>
					aside {isDisplayed ? 'true' : 'false'}
				</p>
			}
		</aside>
	)
}

export default Aside
