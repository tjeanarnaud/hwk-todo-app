import { useState } from 'react'
import { useTodos } from '../useTodos'
import { PlusIcon } from '@heroicons/react/solid'

import './todo-form.css'

const TodoForm = () => {
	const data = useTodos()

	const [title, setTitle] = useState('')

	const handleChange = (e) => {
		setTitle(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const todo = {
			id: Math.floor(Math.random() * 10000),
			name: title,
			isDone: false,
			createdAt: Date.now(),
		}

		data.setTodos([todo, ...data.todos])

		setTitle('')
	}

	return (
		<form className='form__create'>
			<input
				type='text'
				value={title}
				placeholder='Enter a new todo'
				onChange={handleChange}
			/>

			<button
				onClick={handleSubmit}
				disabled={!title.trim()}
				className='btn btn--create'
			>
				<PlusIcon />
			</button>
		</form>
	)
}

export default TodoForm
