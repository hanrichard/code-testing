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
import styled from 'styled-components';

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

class CompanyInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '', value: 'lastName' };
		this.inputRef = React.createRef();
	}

	handleInputChange = e => {
		this.setState({
			term: e.target.value,
		});
	};

	render() {
		const { companies } = this.props;

		const sortOptions = [
			{
				value: 'lastName',
				label: 'Last Name',
			},
			{
				value: 'firstName',
				label: 'First Name',
			},
		];

		const { handleInputChange, term } = this.props;
		return (
			<div className="Company">
				<div className="Company__bar">
					<div className="Company__bar-heading">
						<Typography variant="h4" component="h2" gutterBottom>
							Our Employees
						</Typography>
					</div>
					<div className="Company__bar-sortandsearch">
						<div className="Company__bar-sort">
							<TextField
								id="outlined-select-currency"
								select
								label="Sort"
								value={this.state.value}
								onChange={e => this.handleChange(e)}
								helperText="Sort by"
								margin="normal"
								variant="outlined"
							>
								{sortOptions.map(option => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</div>
						<div className="Company__bar-search">
							<form>
								<TextField
									id="outlined-search"
									label="Search field"
									margin="normal"
									variant="outlined"
									value={term}
									onChange={e => handleInputChange(e)}
									helperText="Search field"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CompanyInfo;
