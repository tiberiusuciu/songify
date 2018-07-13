import React, { Component } from 'react';

import SinglePost from './SinglePost';

import styles from '../styles/MainPage.css';

class PostList extends Component {
	render() {
		return (
			<div className={"row " + styles.postList + " " + styles.mainRowStyling}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
			</div>
		)
	}
};

export default PostList;
