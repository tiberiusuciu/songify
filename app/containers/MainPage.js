import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
import Parser from '../modules/parser';
// import Oracle from '../modules/oracle';

import {
	setUserCurrentInput, submitCurrentInput, newLogEntry,
	sendCommand, invalidCommand,
} from '../actions';

const _parser = (username, userCurrentInput) => {
	return Parser.validate(username, userCurrentInput);
	// Oracle.sendCommand(username, parsedCommand, dispatch);
};

const mapStateToProps = (state, ownProps) => {
	return {
		userCurrentInput: state.userCurrentInput,
		userInputHistory: state.userInputHistory,
		user: state.user,
		logs: state.logs,
		// referredId: ownProps.location.query.referredId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUserCurrentInput: (userCurrentInput) => {
			dispatch(setUserCurrentInput(userCurrentInput));
		},
		onSubmitCurrentInput: (username, userCurrentInput) => {
			dispatch(submitCurrentInput(username, userCurrentInput));
			dispatch(newLogEntry(username, userCurrentInput, "#666"));

			// PARSER
			let parsedCommand = _parser(username, userCurrentInput);
			if(parsedCommand.validCommand) {
				dispatch(sendCommand(parsedCommand));
			}
			else {
				dispatch(invalidCommand(parsedCommand));
			}
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainPage);
