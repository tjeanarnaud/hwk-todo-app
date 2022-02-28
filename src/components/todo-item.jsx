import { useState } from 'react'

import {
	TrashIcon,
	PencilIcon,
	RefreshIcon,
	CheckCircleIcon,
} from '@heroicons/react/solid'
import { useTodos } from '../useTodos'

import './todo-item.css'

const TodoItem = ({ id, name, isDone }) => {
	const data = useTodos()

	const [checked, setChecked] = useState(isDone)
	const [show, setShow] = useState(false)
	const [text, setText] = useState(name)

	const checkTodo = () => {
		setChecked(!checked)
		const todo = data.todos.find((item) => item.id === id)
		todo.isDone = !todo.isDone

		const index = data.todos.findIndex((item) => item.id === id)
		data.todos[index] = todo

		data.setTodos(data.todos)
	}

	const editTodo = (e) => {
		e.preventDefault()

		const todo = data.todos.find((item) => item.id === id)
		todo.name = text

		const index = data.todos.findIndex((item) => item.id === id)
		data.todos[index] = todo
		setShow(!show)

		data.setTodos(data.todos)
	}

	const removeTodo = () => {
		const updatedTodos = [...data.todos].filter((item) => item.id !== id)
		data.setTodos(updatedTodos)
	}

	return (
		<li>
			<button
				className={checked ? 'btn-checked' : 'w-5 h-5 rounded-full'}
				onClick={checkTodo}
			>
				{checked && <CheckCircleIcon />}
			</button>

			{show ? (
				<form onSubmit={editTodo}>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<button type='submit' className='btn-edited'>
						<RefreshIcon />
					</button>
				</form>
			) : (
				<>
					<p className={checked ? 'text-checked' : ''}>{text}</p>
					<button className='btn-edit' onClick={() => setShow(!show)}>
						<PencilIcon />
					</button>
				</>
			)}

			<button onClick={removeTodo} className='btn-remove'>
				<TrashIcon />
			</button>
		</li>
	)
}

export default TodoItem
