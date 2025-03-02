/* eslint-disable react-refresh/only-export-components */
import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
	color: #fff;
	display: block;
	font-family: 'lato', sans-serif;
	font-size: 24px;
	font-weight: 700;
	margin: 15px 0;
`

const Select = styled.select`
	width: 100%;
	font-size: 18px;
	padding: 14px;
	border-radius: 10px;
`

const useSelect = (label, options) => {
	const [state, setState] = useState('')

	const CurrenciesSelect = () => (
		<>
			<Label>{label}</Label>
			<Select value={state} onChange={(e) => setState(e.target.value)}>
				<option value=''>Seleccion</option>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</Select>
		</>
	)

	return [state, CurrenciesSelect]
}

export default useSelect
