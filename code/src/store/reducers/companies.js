import * as actionTypes from '../actions/actionTypes';

const initialState = { companeis: [] };

const companiesRudecer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_COMPANIES:
			return {
				...state,
				companeis: action.payload,
			};
		default:
			return state;
	}
};

export default companiesRudecer;
