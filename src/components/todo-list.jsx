import React, { useState } from 'react'

import { useTodos } from '../useTodos'
import TodoItem from './todo-item'

import './todo-list.css'

const TodoList = () => {
	const data = useTodos()

	return (
		<div className='list'>
			{data.todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	)
}

export default TodoList
