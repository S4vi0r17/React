import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Alert = styled.div`
	background-color: #ef4444;
	color: #fff;
	padding: 15px;
	font-size: 22px;
	text-transform: uppercase;
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	text-align: center;
`

const Error = ({ children }) => {
	return <Alert>{children}</Alert>
}

Error.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Error
