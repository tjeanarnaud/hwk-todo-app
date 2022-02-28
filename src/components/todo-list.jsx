import React, { useState } from 'react'

import { useTodos } from '../useTodos'
import TodoItem from './todo-item'

import './todo-list.css'

const TodoList = () => {
	const data = useTodos()

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
