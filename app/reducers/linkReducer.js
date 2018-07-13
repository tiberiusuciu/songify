import {
	UPDATE_LINK,
	SUBMIT_LINK,
} from '../actions';

const link = (state = '', action) => {
	switch (action.type) {
		case UPDATE_LINK:
			return action.link;
		case SUBMIT_LINK:
			return "";
		default:
			return state;
	}
};

export default ({
	link,
});
