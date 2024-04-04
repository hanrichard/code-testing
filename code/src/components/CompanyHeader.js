import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Moment from 'react-moment';

const Wrapper = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.23);
	padding: 30px 0;
	margin-bottom: 30px;

	.Company__header-info {
		@media only screen and (min-width: 600px) {
			display: flex;
			justify-content: space-between;
		}
	}

	.Company__header-container {
	}
`;
const CompanyItem = info => {
	return (
		<Wrapper className="Company__header">
			<Container maxWidth="lg" className="Company__header-container">
				<Typography variant="h3" component="h1" gutterBottom>
					{info.info.companyName}
				</Typography>

				<div className="Company__header-info">
					<div>
						<Typography component="p" gutterBottom>
							{info.info.companyMotto}
						</Typography>
					</div>
					<div>
						<Typography component="p" gutterBottom>
							Since <Moment format="YYYY" date={info.info.companyEst} />
						</Typography>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
};

CompanyItem.propTypes = {};

export default CompanyItem;
