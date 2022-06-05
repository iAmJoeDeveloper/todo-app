import React from 'react'
import Tarea from './Tarea'

const ListaTareas = ({ tareas, setTareas, showCompletedTasks }) => {
	const toggleCompletada = (id) => {
		setTareas(
			tareas.map((tarea) => {
				if (tarea.id === id) {
					return { ...tarea, completada: !tarea.completada }
				}
				return tarea
			})
		)
	}

	const editTask = (id, newText) => {
		setTareas(
			tareas.map((tarea) => {
				if (tarea.id === id) {
					return { ...tarea, texto: newText }
				}
				return tarea
			})
		)
	}

	const deleteTask = (id) => {
		setTareas(
			tareas.filter((tarea) => {
				if (tarea.id !== id) {
					return tarea
				}
				return
			})
		)
	}

	return (
		<ul className='lista-tareas'>
			{tareas.length > 0 ? (
				tareas.map((tarea) => {
					if (showCompletedTasks) {
						return (
							<Tarea
								key={tarea.id}
								tarea={tarea}
								toggleCompletada={toggleCompletada}
								editTask={editTask}
								deleteTask={deleteTask}
							/>
						)
					} else if (!tarea.completada) {
						return (
							<Tarea
								key={tarea.id}
								tarea={tarea}
								toggleCompletada={toggleCompletada}
								editTask={editTask}
								deleteTask={deleteTask}
							/>
						)
					}
					return
				})
			) : (
				<div className='lista-tareas'>
					<li className='lista-tareas__mensaje'>No hay tareas</li>
				</div>
			)}
		</ul>
	)
}

export default ListaTareas
