import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TodosProvider } from './useTodos'

ReactDOM.render(
	<TodosProvider>
		<App />
	</TodosProvider>,
	document.getElementById('root')
)
