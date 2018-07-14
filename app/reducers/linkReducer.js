import {
	UPDATE_LINK,
	SUBMIT_LINK,
	MUSIC_DOWNLOAD,
	MUSIC_FAIL
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
};

const hidebutton = (state = true, action) => {
	switch (action.type) {
		case MUSIC_DOWNLOAD:
			return false;
		case MUSIC_FAIL:
			return true;
		default:
			return state;
	}
};

const loading = (state = false, action) => {
	switch (action.type) {
		case SUBMIT_LINK:
			return true;
		case MUSIC_DOWNLOAD:
			return false;
		case MUSIC_FAIL:
			return false;
		default:
			return state;
	}
};

const error = (state = false, action) => {
	switch (action.type) {
		case MUSIC_FAIL:
			return true;
		default:
			return false;
	}
};

export default ({
	link,
	musiclink,
	hidebutton,
	loading,
	error,
});
