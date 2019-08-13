import React from 'react'
import './HeaderBar.css'

import Avatar from '../static/avatars';

const styles = {
	avatar: {
		backgroundImage: '',
		backgroundSize: 'cover',
		overflow: 'hidden',
		backgroundRepeat  : 'no-repeat',
		backgroundPosition: 'center',
	}
}

class HeaderBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			avatar: new Avatar(this.props.avatar)
		}

		this.getAvatar = this.getAvatar.bind(this);
	}

	getAvatar(avatar){

		const regex = /^KUINI_[1-6]$/g

		//Default
		let image = 'KUINI_K.png';

		if(regex.test(avatar)){
			image =  `${avatar}.jpg`
		}

		return require(`../static/avatars/${image}`)
	}


	render(){

		let imageURL = this.getAvatar(this.props.avatar);

		console.log(this.props.avatar, imageURL);

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