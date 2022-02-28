import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodosContext = createContext()

export function useTodos() {
	return useContext(TodosContext)
}

export function TodosProvider({ children }) {
	const [todos, setTodos] = useLocalStorage('todos', [])

	useEffect(() => {
		setTodos(todos)
	}, [todos])

	return (
		<TodosContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodosContext.Provider>
	)
}
