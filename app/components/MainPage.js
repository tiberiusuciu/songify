import React, { Component } from 'react';

// import PostList from './PostList';
// import DashBoard from './DashBoard';
// import NavigatorBar from './NavigatorBar';
// import MenuSelection from './MenuSelection';
// import SearchBox from './SearchBox';
// import Dashboard from './Dashboard';

import styles from '../styles/MainPage.css';

class MainPage extends Component {

	// linkChange(e) {
	// 	this.props.onLinkChange(e.target.value);
	// }

	render() {
		console.log(window);

		return (
			<div className={"row " + styles.mainRowStyling + " " + styles.mainBody}>
				<div className={styles.contentAlignment}>
					<form>
						<input placeholder="- Link for youtube video here -" className={styles.inputElement} onChange={(e) => {this.props.onLinkChange(e.target.value);}} value={this.props.link} />
						<input type="submit" className={styles.submitElement} onClick={(e) => {
							e.preventDefault();
							this.props.onSubmitLink(this.props.link)
						}}/>
					</form>
					<div><a href={this.props.musiclink} style={{display: this.props.hidebutton ? "hidden" : "visible"}}>Get Music!</a></div>
				</div>
			</div>
		)
	}
};

export default MainPage;


// <NavigatorBar />
// <div className={"col-12 " + styles.noPadding}>
// <DashBoard />
// </div>
// <div className={"col-12 " + styles.noPadding}>
// <div className={"row " + styles.mainRowStyling}>
// <div className="col" ></div>
// <div className={"col-8 " + styles.noPadding}>
// <PostList />
// </div>
// <div className="col"></div>
// </div>
// </div>
