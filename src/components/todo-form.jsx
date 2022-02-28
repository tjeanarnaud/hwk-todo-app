import { useState } from 'react'
import { useTodos } from '../useTodos'

import './todo-form.css'

const TodoForm = () => {
	const data = useTodos()

	const [input, setInput] = useState('')

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const todo = {
			id: Math.floor(Math.random() * 10000),
			name: input,
			isDone: false,
			createdAt: Date.now(),
		}

		data.setTodos([todo, ...data.todos])

		setInput('')
	}

	return (
		<>
			<form>
				<input
					type='text'
					name='text'
					value={input}
					placeholder='Enter a new todo'
					onChange={handleChange}
				/>

				<button onClick={handleSubmit} disabled={!input.trim()}>
					Add a Todo
				</button>
			</form>
		</>
	)
}

export default TodoForm
