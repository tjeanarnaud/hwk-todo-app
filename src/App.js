import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

import './App.css'
import TodoQuote from './components/todo-quote'

function App() {
	return (
		<div className='app'>
			<TodoQuote />
			<h1>Todo App with React</h1>
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default App
