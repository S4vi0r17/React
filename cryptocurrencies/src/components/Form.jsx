import styled from '@emotion/styled'
import useSelect from '../hooks/useSelect'
import { currencies } from '../data/currencies'

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

const Form = () => {
	const [currency, CurrenciesSelect] = useSelect('Elige', currencies)

	return (
		<form>
			<CurrenciesSelect />
			{currency}
			<SubmitInput type='submit' value='Quote' />
		</form>
	)
}

export default Form
