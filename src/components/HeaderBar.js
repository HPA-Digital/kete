import React from 'react'
import './HeaderBar.css'


class HeaderBar extends React.Component {
	constructor(props){
		super(props);

		this.getAvatar = this.getAvatar.bind(this);
	}


	render(){
		return (
			<header className="Header">
				<div className="Header-top-bar">

						{this.props.title}

				</div>
				<div className="Header-img" style={{
					backgroundImage: `url(${this.getAvatar(this.props.avatar)})`
				}}>

				</div>
			</header>
		);
	}
}

export default HeaderBar
