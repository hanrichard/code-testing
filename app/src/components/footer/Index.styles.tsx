import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	background: rgb(2,151,255);
	background: linear-gradient(180deg, rgba(2,151,255,1) 0%, rgba(1,103,253,1) 100%);
	padding: 30px 10px;
`;

export const ContainerInner = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: 0 auto;

	a {
		color: #ffffff;
		text-decoration: none;
	}

	@media only screen and (min-width: 768px) {	
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;


export const ButtonLink = styled(Link)`
	background: rgb(2,151,255);
	background: linear-gradient(180deg, rgb(53,53,53, 1) 0%, rgba(65,65,65,1) 100%);
	text-decoration: none;
	padding: 10px 20px;
	margin-left: 20px;
`