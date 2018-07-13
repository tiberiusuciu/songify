import React, { Component } from 'react';

// import PostList from './PostList';
// import DashBoard from './DashBoard';
// import NavigatorBar from './NavigatorBar';
import MenuSelection from './MenuSelection';
import SearchBox from './SearchBox';
import Dashboard from './Dashboard';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className={"row " + styles.mainRowStyling + " " + styles.mainBody}>
				<div className={"col-12"}>
					<MenuSelection />
					<div className={"row"}>
						<div className={"col " + styles.quationText}>
							<span>"Un ingénieur ne travaille jamais seul, il sera</span><br /><span>toujours en collaboration avec ses confrère"</span>
						</div>
					</div>
					<SearchBox />
					<Dashboard />
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
