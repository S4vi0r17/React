import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ResultDiv = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Image = styled.img`
	width: 40%;
	display: block;
`

const Text = styled.p`
	font-size: 18px;
	span {
		font-weight: 700;
	}
`

const Price = styled.p`
	font-size: 30px;
	span {
		font-weight: 700;
	}
`

const Result = ({ result }) => {
	// console.log(result)
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		result
	return (
		<ResultDiv>
			<Image
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt='Crypto Image'
			/>
			<div>
				<Price>
					El precio es de: <span>{PRICE}</span>
				</Price>
				<Text>
					Precio más alto del día: <span>{HIGHDAY}</span>
				</Text>
				<Text>
					Precio más bajo del día: <span>{LOWDAY}</span>
				</Text>
				<Text>
					Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
				</Text>
				<Text>
					Última actualización: <span>{LASTUPDATE}</span>
				</Text>
			</div>
		</ResultDiv>
	)
}

Result.propTypes = {
	result: PropTypes.object.isRequired,
}

export default Result
