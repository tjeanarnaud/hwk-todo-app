import { createContext, useContext, useState, useEffect } from 'react'

const TodosContext = createContext()

export function useTodos() {
	return useContext(TodosContext)
}

export function TodosProvider({ children }) {
	const [todos, setTodos] = useState([])

	return (
		<TodosContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodosContext.Provider>
	)
}
