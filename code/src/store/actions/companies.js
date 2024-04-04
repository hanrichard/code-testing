import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setCompaniesFailed = () => {
	return {
		type: actionTypes.FETCH_COMPANIES_FAILED,
	};
};

export const setCompanies = payload => {
	return {
		type: actionTypes.FETCH_COMPANIES,
		payload,
	};
};

export const initCompanies = () => {
	return dispatch => {
		return axios
			.get('sample-data.json')
			.then(response => {
				dispatch(setCompanies(response.data));
			})
			.catch(error => {
				dispatch(setCompaniesFailed());
			});
	};
};
