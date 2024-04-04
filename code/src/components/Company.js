import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import CompanyItem from './CompanyItem';
import Typography from '@material-ui/core/Typography';
import Companyheader from './CompanyHeader';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Modal from './Modal';
import styled from 'styled-components';

import CompanyInfo from './CompanyInfo';

const Wrapper = styled.div`
	.Company__bar {
		margin-bottom: 30px;

		@media only screen and (min-width: 600px) {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.Company__bar-sortandsearch {
		display: flex;
	}
	.Company__bar-sort {
		margin-right: 10px;
	}
`;

class Company extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false, term: '', company: null };
	}

	handleInputChange = e => {
		console.log(e);
		this.setState({
			term: e.target.value,
		});
	};

	handleChange = e => {
		console.log(e);
		this.setState({
			value: e.target.value,
		});
	};

	displayModal = company => {
		this.setState({
			company: company,
			open: true,
		});
	};

	closeModal = () => {
		this.setState({
			open: false,
		});
	};

	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies } = this.props;

		const valuename = this.state.value;

		let companiesEmployees =
			companies.employees &&
			companies.employees.sort(function(a, b) {
				return a[valuename] > b[valuename] ? 1 : b[valuename] > a[valuename] ? -1 : 0;
			});

		return companies.length === 0 ? (
			<CircularProgress />
		) : (
			<Wrapper className="Company">
				<div className="Company__header">
					<Companyheader info={companies.companyInfo} />
				</div>
				<div className="Company__body">
					<Container maxWidth="lg">
						<CompanyInfo term={this.state.term} handleInputChange={this.handleInputChange} />

						<div>
							<Grid container spacing={3}>
								{companies.employees &&
									companies.employees.map(company => {
										return (
											<CompanyItem
												company={company}
												key={company.id}
												display={this.displayModal}
											/>
										);
									})}
							</Grid>
						</div>
					</Container>
				</div>

				<Modal company={this.state.company} onOpen={this.state.open} onClick={this.closeModal} />
			</Wrapper>
		);
	}
}

Company.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default Company;
