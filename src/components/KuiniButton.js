import React from 'react';

import './KuiniButton.css'

class KuiniButton extends React.Component {

	render(){
		return (
			<button className="KuiniButton" onClick={this.props.action}>
					<img src={this.props.image} className="KuiniButton-icon" alt="More">
					</img>
					<div className="KuiniButton-text">
						{this.props.title}
					</div>
			</button>
		)
	}
}

export default KuiniButton;