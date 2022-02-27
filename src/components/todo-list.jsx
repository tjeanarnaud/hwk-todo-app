import React, { useState } from 'react'

import { useTodos } from '../todos-context'
import TodoItem from './todo-item'

import './todo-list.css'

const TodoList = () => {
	const data = useTodos()
	// const todos = data.todos

	return (
		<>
			<h2 className='mb-6'>What's the plan for today?</h2>

			<ul>
				{data.todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	)
}

export default TodoList
