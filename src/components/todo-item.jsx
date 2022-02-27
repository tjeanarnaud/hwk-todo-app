import React, { useEffect, useState } from 'react'

import {
	TrashIcon,
	PencilIcon,
	PencilAltIcon,
	CheckCircleIcon,
} from '@heroicons/react/solid'
import { useTodos } from '../todos-context'

import './todo-item.css'

const TodoItem = ({ id, name }) => {
	const data = useTodos()

	const [checked, setChecked] = useState(false)
	const [show, setShow] = useState(false)
	const [text, setText] = useState(name)

	const checkTodo = () => {
		setChecked(!checked)

		const todo = data.todos[data.todos.findIndex((item) => item.id === id)]
		todo.isDone = !todo.isDone
	}

	const editTodo = (e) => {
		e.preventDefault()

		const todo = data.todos[data.todos.findIndex((item) => item.id === id)]
		todo.name = text

		setShow(!show)
	}

	const removeTodo = () => {
		const newTodoList = [...data.todos].filter((item) => item.id !== id)
		data.setTodos(newTodoList)
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
						<PencilIcon />
					</button>
				</form>
			) : (
				<>
					<p className={checked ? 'text-checked' : ''}>{text}</p>
					<button className='btn-edit' onClick={() => setShow(!show)}>
						<PencilAltIcon />
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
