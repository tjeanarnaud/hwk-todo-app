import { useState } from 'react'

import {
	CheckIcon,
	TrashIcon,
	PencilIcon,
	RefreshIcon,
} from '@heroicons/react/solid'
import { useTodos } from '../useTodos'

import './todo-item.css'

const TodoItem = ({ id, task, isChecked }) => {
	const { todos, setTodos } = useTodos()

	const [checked, setChecked] = useState(isChecked)
	const [show, setShow] = useState(false)
	const [text, setText] = useState(task)

	const checkTodo = () => {
		setChecked(!checked)

		const index = todos.findIndex((item) => item.id === id)
		const todo = todos[index]
		todo.isChecked = !todo.isChecked

		setTodos(todos)
	}

	const editTodo = (e) => {
		e.preventDefault()

		const index = todos.findIndex((item) => item.id === id)
		const todo = todos[index]
		todo.task = text

		setShow(!show)
		setTodos(todos)
	}

	const deleteTodo = () => {
		const updatedTodos = [...todos].filter((item) => item.id !== id)
		setTodos(updatedTodos)
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
