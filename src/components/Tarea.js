import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'

const Tarea = ({ tarea, toggleCompletada, editTask, deleteTask }) => {
	const [changeTask, setChangeTask] = useState(false)
	const [newTask, setNewTask] = useState(tarea.texto)

	const handleSubmit = (e) => {
		e.preventDefault()
		editTask(tarea.id, newTask)
		setChangeTask(!changeTask)
	}

	return (
		<li className='lista-tareas__tarea'>
			<FontAwesomeIcon
				icon={tarea.completada ? faCheckSquare : faSquare}
				className='lista-tareas__icono lista-tareas__icono-check'
				onClick={() => toggleCompletada(tarea.id)}
			/>
			<div className='lista-tareas__texto'>
				{changeTask ? (
					<form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
						<input
							type='text'
							className='formulario-editar-tarea__input'
							value={newTask}
							onChange={(e) => setNewTask(e.target.value)}
						/>

						<button type='submit' className='formulario-editar-tarea__btn'>
							Actualizar
						</button>
					</form>
				) : (
					tarea.texto
				)}
			</div>
			<div className='lista-tareas__contenedor-botones'>
				<FontAwesomeIcon
					icon={faEdit}
					className='lista-tareas__icono lista-tareas__icono-accion'
					onClick={() => setChangeTask(!changeTask)}
				/>
				<FontAwesomeIcon
					icon={faTimes}
					className='lista-tareas__icono lista-tareas__icono-accion'
					onClick={() => deleteTask(tarea.id)}
				/>
			</div>
		</li>
	)
}

export default Tarea
