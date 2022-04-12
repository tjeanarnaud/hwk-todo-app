import React from 'react'

import useRandomQuote from '../useRandomQuote'

import './todo-quote.css'

const TodoQuote = () => {
	const quote = useRandomQuote()

	return (
		<blockquote className='quote'>
			<div className='quote__content'>
				<div className='content__opening-mark'></div>
				<div className='content__closing-mark'></div>
				{quote.text}
			</div>

			<cite className='quote__author'>
				<span>_{quote.author}</span>
			</cite>
		</blockquote>
	)
}

export default TodoQuote
