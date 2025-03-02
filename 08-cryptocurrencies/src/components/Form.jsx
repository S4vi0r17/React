import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import useSelect from '../hooks/useSelect'
import { currencies } from '../data/currencies'
import { useEffect, useState } from 'react'
import Error from './Error'

const SubmitInput = styled.input`
	margin-top: 30px;
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	transition: background-color 0.2s;

	&:hover {
		background-color: #7a7dfe;
		cursor: pointer;
	}
`

const Form = ({ setCurrencies }) => {
	const [cryptos, setCryptos] = useState([])
	const [isError, setIsError] = useState(false)

	const [currency, CurrenciesSelect] = useSelect(
		'Choose your currency',
		currencies
	)
	const [crypto, CryptoSelect] = useSelect('Choose your crypto', cryptos)

	useEffect(() => {
		const consultAPI = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
			const response = await fetch(url)
			const result = await response.json()
			// console.log(result.Data)

			const arrayCrypto = result.Data.map((crypto) => {
				return {
					name: crypto.CoinInfo.FullName,
					id: crypto.CoinInfo.Name,
				}
			})
			// console.log(arrayCrypto);
			setCryptos(arrayCrypto)
		}
		consultAPI()
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(currency);
		// console.log(crypto);
		if ([currency, crypto].includes('')) {
			setIsError(true)
			setTimeout(() => {
				setIsError(false)
			}, 3000)
			return
		}

		setCurrencies({
			currency,
			crypto,
		})
	}

	return (
		<>
			{isError && <Error>All fields are required</Error>}
			<form onSubmit={handleSubmit}>
				<CurrenciesSelect />
				<CryptoSelect />
				<SubmitInput type='submit' value='Quote' />
			</form>
		</>
	)
}

Form.propTypes = {
	setCurrencies: PropTypes.func.isRequired,
}

export default Form
