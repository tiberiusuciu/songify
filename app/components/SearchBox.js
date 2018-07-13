import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class MenuSelection extends Component {
	render() {
		return (
      <div>
        <div className={"row"}>
          <div className={"col " + styles.searchText}>
            <span>Vous avez besoin d'aide pour</span><br /><span>quelle matière?</span>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col " + styles.searchBox}>
            <input type="text" placeholder="MAT144 - Introduction aux Mathématiques"/>
          </div>
        </div>
      </div>
		)
	}
};

export default MenuSelection;
