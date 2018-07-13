import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class MenuSelection extends Component {
	render() {
		return (
			<div className={"row " + styles.MenuSelectionRow}>
        <div className={"col " + styles.MenuSelectionButton + " " + styles.MenuSelectionButtonActive}>
          Étudier
        </div>
        <div className={"col " + styles.MenuSelectionButton}>
          Enseigner
        </div>
			</div>
		)
	}
};

export default MenuSelection;
