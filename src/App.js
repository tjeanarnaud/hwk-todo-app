import { useEffect, useRef, useState } from 'react'

import './App.css'
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

function App() {
	return (
		<div className='app'>
			<h1>Todo App with React</h1>
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default App
