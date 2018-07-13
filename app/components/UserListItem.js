import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import styles from '../styles/MainPage.css';

class UserListItem extends Component {
	render() {
		return (
			<div className={styles.tutorList}>
				<div className={styles.userListFirstRow}>
					<div className={styles.inlineUserStats}>Nom: <span className={styles.userlistName}>{this.props.name}</span></div>
					<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>
						<StarRatingComponent
		          name=""
		          editing={false}
		          starCount={5}
		          value={this.props.rating}
							starColor={"black"}
							emptyStarColor={"#dddddd"}
							renderStarIcon={(index, value) => {
	              return (
	                <span>
	                  <i className="far fa-star"></i>
	                </span>
	              );
							}}
							className={styles.starHeight}
		        />
					</div>
				</div>
				<div className={styles.userListInnerInfoSpacing}>
					<div className={styles.inlineUserStats}>Niveau: <span className={styles.userlistName}>{this.props.niveau}</span></div>
					<div className={styles.inlineUserStats + " " + styles.userListRightAlign}><span className={styles.userlistName}>{this.props.count}</span> <i className="fas fa-user"></i></div>
				</div>
			</div>
		)
	}
};

export default UserListItem;
