import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	checkForVisible(check) {
		if (check) {
			return "none";
		}
		else {
			return "block";
		}
	}

	checkForLoading(isLoading) {
		if (isLoading) {
			return "block";
		}
		else {
			return "none";
		}
	}

	checkForError(error) {
		if (error) {
			return "block";
		}
		else {
			return "none";
		}
	}

	copyClipboard(link) {
		window.getSelection().selectAllChildren( document.getElementById("anotherLink"));
	  document.execCommand("copy");
	}

	render() {

		return (
			<div className={"row " + styles.mainRowStyling + " " + styles.mainBody}>
				<div className={styles.contentAlignment}>
					<h1 className={styles.title}>&middot; Songify &middot;</h1>
					<form>
						<input placeholder="- Link for youtube video here -" className={styles.inputElement} onChange={(e) => {this.props.onLinkChange(e.target.value);}} value={this.props.link} />
						<input type="submit" className={styles.submitElement} onClick={(e) => {
							e.preventDefault();
							this.props.onSubmitLink(this.props.link)
						}}/>
					</form>
					<div className={styles.gradient} style={{display: this.checkForLoading(this.props.loading)}}>
						<div className={styles.loading}>Loading...</div>
					</div>
					<div onClick={() => {this.copyClipboard(this.props.musiclink)}} className={styles.downloadButton} style={{display: this.checkForVisible(this.props.hidebutton)}}><div id="copyText">Click Here To Copy Download Link!</div></div>
					<div className={styles.error} style={{display: this.checkForError(this.props.error)}}>There was an error, please try again!</div>
					<div id="anotherLink" style={{fontSize:0}}>{this.props.musiclink}</div>
				</div>
			</div>
		)
	}
};

export default MainPage;
