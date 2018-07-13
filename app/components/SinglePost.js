import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

// var customHTML = "<p style=\"color:blue;text-align:right;\">This is a test</p>";

class SinglePost extends Component {
	render() {
		return (
			<div className={"row " + styles.singlePostStyling + " " + styles.mainRowStyling}>
				<div className={"col-12 " + styles.noPadding}>
					<div className={styles.singlePostTextStyling}>
						<h2>This is a post!</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus sapien, convallis lobortis tristique fringilla, tristique id velit. Nulla eros tellus, gravida ac consectetur id, commodo ut quam. Ut mollis orci id libero aliquet, in blandit orci mollis. Praesent non volutpat leo, id rutrum ipsum. Aenean dictum mauris ac risus interdum, ut porttitor sapien vestibulum. Integer dictum tellus at posuere gravida. Suspendisse suscipit augue eu tellus suscipit, vel interdum dolor interdum. Nunc vitae viverra mi. Sed lorem ligula, faucibus sed dapibus sed, posuere nec l ectus.</p>
					</div>
					<div className={styles.singlePostRatingsStyling}>
						<div className={styles.ratingButtons + " " + styles.ratingAdd}>+</div>
						<div className={styles.ratingButtons + " " + styles.ratingComment}>177</div>
						<div className={styles.ratingButtons + " " + styles.ratingRemove}>-</div>
					</div>
				</div>
			</div>
		)
	}
};

// <div dangerouslySetInnerHTML={{__html: customHTML}}></div>
export default SinglePost;
