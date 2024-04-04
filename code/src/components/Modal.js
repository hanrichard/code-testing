import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Moment from 'react-moment';

import styled from 'styled-components';

const ModalWrapper = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;

	.Modal__background {
		background-color: rgba(0, 0, 0, 0.4);
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.Modal__container {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		right: 0;
		position: absolute;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Company__modal-card {
		display: flex;
		position: relative;
	}

	.Company__modal-close {
		position: absolute;
		top: 0;
		right: 0;
	}

	.Company__modal-img {
		width: 100%;

		@media only screen and (min-width: 600px) {
			max-width: 200px;
		}
	}
`;
class Modal extends Component {
	render() {
		const { company, onOpen, onClick } = this.props;

		return onOpen ? (
			<ModalWrapper>
				<div onClick={onClick} className="Modal__background"></div>

				<Container maxWidth="md" className="Modal__container">
					<Paper>
						<Paper p={3}>
							<Card className="Company__modal-card">
								<button type="button" onClick={onClick} className="Company__modal-close">
									&times;
								</button>
								<CardContent>
									<img src={company.avatar} alt={company.lastName} className="Company__modal-img" />

									<Typography component="p" gutterBottom>
										<b>{company.jobTitle}</b>
									</Typography>
									<Typography component="p" gutterBottom>
										{company.age}
									</Typography>
									<Typography component="p" gutterBottom>
										<Moment format="YYYY" date={company.dateJoined} />
									</Typography>
								</CardContent>

								<CardContent>
									<Typography component="h1" variant="h3" gutterBottom>
										{company.lastName} {company.firstName}
									</Typography>
									<hr />
									<Typography component="p" gutterBottom>
										{company.bio}
									</Typography>
								</CardContent>
							</Card>
						</Paper>
					</Paper>
				</Container>
			</ModalWrapper>
		) : null;
	}
}

Modal.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default Modal;
