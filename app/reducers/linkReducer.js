import {
	UPDATE_LINK,
	SUBMIT_LINK,
	MUSIC_DOWNLOAD
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

const musiclink = (state = '', action) => {
	switch (action.type) {
		case MUSIC_DOWNLOAD:
			return window.location.host + "/music/" + action.filename;
		default:
			return state;
	}
}

const hidebutton = (state = true, action) => {
	switch (action.type) {
		case MUSIC_DOWNLOAD:
			return false;
		default:
			return state;
	}
}

export default ({
	link,
	musiclink,
	hidebutton,
});
