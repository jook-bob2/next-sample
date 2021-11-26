import styled from 'styled-components'

export const Button = styled.button`
	/* transition: all 0.3s; */
	width: ${(props) => props.w || '100%'};
	height: ${(props) => props.h || '35px'};
	color: ${(props) => props.color || 'white'};
	background-color: ${(props) => props.bgColor || '#5cae6a'};
	border: 1px solid transparent;
	border-radius: 5px;
	&:hover {
		border-color: ${(props) => props.bgColor || '#5cae6a'};
		background-color: ${(props) => props.color || 'white'};
		span {
			color: ${(props) => props.bgColor || '#5cae6a'};
		}
	}
	span {
		font-size: 13px;
		font-weight: 500;
		letter-spacing: -0.33px;
		color: white;
	}
`

export default Button
