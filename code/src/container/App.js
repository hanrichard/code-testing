import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Company from '../components/Company';

const mapStateToProps = state => {
	return {
		companies: state.companies.companeis,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInitCompanies: () => dispatch(actions.initCompanies()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Company);
