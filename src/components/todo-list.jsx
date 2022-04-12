import { useTodos } from '../useTodos'
import FlipMove from 'react-flip-move'
import TodoItem from './todo-item'

import './todo-list.css'

const TodoList = () => {
	const { todos } = useTodos()

	return (
		<FlipMove className='todo__list' duration={300} easing='ease-in-out'>
			{todos.map((todo) => (
				<div key={todo.id}>
					<TodoItem {...todo} />
				</div>
			))}
		</FlipMove>
	)
}

export default TodoList
