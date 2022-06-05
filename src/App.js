import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'

function App() {
	// Obtenemos las tareas guardadas de localstorage
	const savedTasks = localStorage.getItem('tareas')
		? JSON.parse(localStorage.getItem('tareas'))
		: []

	// Establecemos el estado de las tareas
	const [tareas, setTareas] = useState(savedTasks)
	// Guardamos el estado dentro de localstorage
	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tareas))
	}, [tareas])

	// Accedemos a localstorage y comprobamos si mostrar tareas completadas es null
	let configShowCompletedTasks = ''
	if (localStorage.getItem('showCompletedTasks') === null) {
		configShowCompletedTasks = true
	} else {
		configShowCompletedTasks = localStorage.getItem('showCompletedTasks') === 'true'
	}

	//El estado de mostrar tareas completadas
	const [showCompletedTasks, setShowCompletedTasks] = useState(configShowCompletedTasks)

	useEffect(() => {
		localStorage.setItem('showCompletedTasks', showCompletedTasks.toString())
	}, [showCompletedTasks])

	return (
		<>
			<div className='background'>
				<div className='preContainer'>
					<h1>TO DO</h1>
				</div>
			</div>
			<div className='bigContainer'>
				<div className='contenedor'>
					<Header
						showCompletedTasks={showCompletedTasks}
						setShowCompletedTasks={setShowCompletedTasks}
					/>
					<Formulario tareas={tareas} setTareas={setTareas} />
					<ListaTareas
						tareas={tareas}
						setTareas={setTareas}
						showCompletedTasks={showCompletedTasks}
					/>
				</div>
			</div>
		</>
	)
}

export default App
