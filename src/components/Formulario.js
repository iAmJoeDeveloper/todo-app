import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuiddv4 } from 'uuid'

const FormularioTareas = ({ tareas, setTareas }) => {
	const [inputTarea, setInputTarea] = useState('')

	const handleInput = (e) => {
		console.log(e.target.value)
		setInputTarea(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		setTareas([
			...tareas,
			{
				id: uuiddv4(),
				texto: inputTarea,
				completada: false,
			},
		])
		setInputTarea('')
	}

	return (
		<form action='' className='formulario-tareas' onSubmit={handleSubmit}>
			<input
				type='text'
				className='formulario-tareas__input'
				placeholder='Escribe una tarea'
				value={inputTarea}
				onChange={(e) => handleInput(e)}
			/>
			<button type='submit' className='formulario-tareas__btn'>
				<FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn' />
			</button>
		</form>
	)
}

export default FormularioTareas
