import styled from '@emotion/styled'
import CryptoImage from './assets/crypto-image.png'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`

const Image = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`

const Heading = styled.h1`
	font-family: 'Lato', sans-serif;
	color: #fff;
	text-align: center;
	font-weight: 700;
	margin-top: 100px;
	margin-bottom: 50px;
	font-size: 34px;

	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #56bafb;
		display: block;
		margin: 10px auto 0 auto;
	}
`

function App() {
	const [currencies, setCurrencies] = useState({})
	const [result, setResult] = useState({})

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (Object.keys(currencies).length > 0) {
			const quoteCrypto = async () => {
				setLoading(true)
				setResult({})
				const { currency, crypto } = currencies
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
				// console.log(url);
				const response = await fetch(url)
				// console.log(response);
				const result = await response.json()
				// console.log(result.DISPLAY[crypto][currency])
				setLoading(false)
				setResult(result.DISPLAY[crypto][currency])
			}
			quoteCrypto()
		}
	}, [currencies])

	return (
		<Container>
			<Image src={CryptoImage} alt='Crypto Image' />
			<div>
				<Heading>Instant Cryptocurrency Quotes</Heading>
				<Form setCurrencies={setCurrencies} />
				{loading && <Spinner />}
				{result.PRICE && <Result result={result} />}
			</div>
		</Container>
	)
}

export default App
