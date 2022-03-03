import { useState } from 'react'

import {
	CheckIcon,
	TrashIcon,
	PencilIcon,
	RefreshIcon,
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

	const deleteTodo = () => {
		const updatedTodos = [...data.todos].filter((item) => item.id !== id)
		data.setTodos(updatedTodos)
	}

	return (
		<div className={`list__item${checked ? ' list__item--checked' : ''}`}>
			<button
				className={checked ? 'btn btn--checked' : 'btn'}
				onClick={checkTodo}
			>
				<CheckIcon />
			</button>

			{show ? (
				<form onSubmit={editTodo}>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<button type='submit' className='btn btn--update'>
						<RefreshIcon />
					</button>
				</form>
			) : (
				<>
					<div
						className={`item__title${checked ? ' item__title--checked' : ''}`}
					>
						{text}
					</div>

					{!checked && (
						<button className='btn btn--edited' onClick={() => setShow(!show)}>
							<PencilIcon />
						</button>
					)}
				</>
			)}

			<button className='btn btn--delete' onClick={deleteTodo}>
				<TrashIcon />
			</button>
		</div>
	)
}

export default TodoItem
