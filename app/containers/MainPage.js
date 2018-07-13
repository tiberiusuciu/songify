import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
import Parser from '../modules/parser';
// import Oracle from '../modules/oracle';

import {
	setLink, sendLink
} from '../actions';

const _parser = (username, userCurrentInput) => {
	return Parser.validate(username, userCurrentInput);
	// Oracle.sendCommand(username, parsedCommand, dispatch);
};

const mapStateToProps = (state, ownProps) => {
	return {
		link: state.link,
		// referredId: ownProps.location.query.referredId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLinkChange: (link) => {			
			dispatch(setLink(link));
		},
		onSubmitLink: (link) => {
			dispatch(sendLink(link));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainPage);

// onSubmitCurrentInput: (username, userCurrentInput) => {
// 	dispatch(submitCurrentInput(username, userCurrentInput));
// 	dispatch(newLogEntry(username, userCurrentInput, "#666"));

// 	// PARSER
// 	let parsedCommand = _parser(username, userCurrentInput);
// 	if(parsedCommand.validCommand) {
// 		dispatch(sendCommand(parsedCommand));
// 	}
// 	else {
// 		dispatch(invalidCommand(parsedCommand));
// 	}
// },