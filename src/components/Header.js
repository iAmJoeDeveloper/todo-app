import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const Header = ({ setShowCompletedTasks, showCompletedTasks }) => {
	const toggleCompletada = () => {
		return setShowCompletedTasks(!showCompletedTasks)
	}

	return (
		<header className='header'>
			<h1 className='header__titulo'>Tasks Lists</h1>
			{showCompletedTasks ? (
				<button className='header__boton' onClick={() => toggleCompletada()}>
					No mostrar completadas
					<FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton' />
				</button>
			) : (
				<button className='header__boton' onClick={() => toggleCompletada()}>
					Mostrar completadas
					<FontAwesomeIcon icon={faEye} className='header__icono-boton' />
				</button>
			)}
		</header>
	)
}

export default Header
