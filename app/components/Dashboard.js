import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import UserListItem from './UserListItem';

import styles from '../styles/MainPage.css';

class MenuSelection extends Component {
	render() {
		return (
			<div className={"row justify-content-center " + styles.DashBoard}>
				<div className={styles.dashboardListContainer}>
					<div className={styles.dashboardTab}>
						<div className={styles.tabOption}><i className="far fa-star"></i></div>
						<div className={styles.tabOption}><i className="fas fa-user"></i></div>
						<div className={styles.tabOption}><i className="fas fa-sort-alpha-up"></i></div>
						<div className={styles.tabOption + " " + styles.tabOptionEnd}><i className="fas fa-graduation-cap"></i></div>
					</div>
					<div className={styles.dashboardList}>
						<UserListItem name="Tiberiu Cristian Suciu" niveau="Baccalauréat" rating={3} count={51}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Guillaume Baril" niveau="Baccalauréat" rating={4} count={45}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Adam Jimenez" niveau="Doctorat" rating={5} count={27}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Jonathan Dionne-Morin" niveau="Maîtrise" rating={4} count={15}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
						<div className={styles.userListInnerSeparation}></div>
						<UserListItem name="Hervé Carole" niveau="Maîtrise" rating={4} count={8}/>
					</div>
				</div>
				<div className={styles.dashboardProfile}>
					<div className={styles.profilePicture} style={{backgroundImage: "url('/images/chris1.jpg')"}}></div>
					<div className={styles.profileDescription}>
						<div className={styles.profileName}>Tiberiu Cristian Suciu</div>
						<div className={styles.profileName}>Baccalauréat</div>
						<StarRatingComponent
		          name=""
		          editing={false}
		          starCount={5}
		          value={3}
							starColor={"black"}
							emptyStarColor={"#dddddd"}
							renderStarIcon={(index, value) => {
	              return (
	                <span>
	                  <i className="far fa-star"></i>
	                </span>
	              );
							}}
							className={styles.starHeight + " " + styles.profileStars}
		        />
					<div className={styles.profileInlineRatings}><span className={styles.userlistName}>{51}</span> <i className="fas fa-user"></i></div>
					</div>
				</div>
			</div>
		)
	}
};

export default MenuSelection;
