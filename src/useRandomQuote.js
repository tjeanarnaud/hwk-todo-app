import { useEffect, useState } from 'react'

const useRandomQuote = () => {
	const [quote, setQuote] = useState('')

	const getRandomInt = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	useEffect(() => {
		const fetchQuotes = async () => {
			await fetch(`https://type.fit/api/quotes`)
				.then((res) => res.json())
				.then((data) => {
					const index = getRandomInt(0, data.length)
					setQuote(data[index])
				})
		}

		fetchQuotes()
	}, [])

	return quote
}

export default useRandomQuote
