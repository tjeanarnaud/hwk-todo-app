import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import TodoQuote from './components/todo-quote'

import './App.css'

function App() {
	return (
		<div className='app'>
			<TodoQuote />
			<h1 className='app__title'>Todo App with React</h1>
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default App
