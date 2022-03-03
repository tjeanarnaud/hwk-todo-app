import React from 'react'

import useRandomQuote from '../useRandomQuote'

import './todo-quote.css'

const TodoQuote = () => {
	const quote = useRandomQuote()

	return (
		<blockquote>
			<p>{quote.text}</p>
			<cite>-- {quote.author}</cite>
		</blockquote>
	)
}

export default TodoQuote
