import { useState } from 'react'
import { useTodos } from '../useTodos'
import { PlusIcon } from '@heroicons/react/solid'

import './todo-form.css'

const TodoForm = () => {
	const { todos, setTodos } = useTodos()

	console.log(todos)

	const [text, setText] = useState('')

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const createTodo = (e) => {
		e.preventDefault()

		const todo = {
			id: Date.now(),
			task: text,
			isChecked: false,
			createdAt: Date.now(),
		}

		setTodos([todo, ...todos])
		setText('')
	}

	return (
		<form onSubmit={createTodo} className='form__create'>
			<input
				type='text'
				value={text}
				placeholder='Enter a new todo'
				onChange={handleChange}
			/>

			<button disabled={!text.trim()} className='btn btn--create'>
				<PlusIcon />
			</button>
		</form>
	)
}

export default TodoForm
