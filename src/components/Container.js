import React from 'react'
import queryString from 'query-string';
import { Helmet } from 'react-helmet';

import HeaderBar from './HeaderBar';
import './Container.css'

class Container extends React.Component {

	constructor(props){
		super(props)

		this.getTitle = this.getTitle.bind(this);
		this.getAvatar = this.getAvatar.bind(this);

		this.state = {

		}
	}

	getTitle(param){
		switch(param){
			case 'things':
				return '101+ Things to Do...';
			case 'rant':
				return 'Rant';
			default:
				return 'Unknown';
		}
	}

	getAvatar(location){
		const parsed = queryString.parse(location.search);

		return parsed.avatar;
	}

	render() {

		console.log("Container Props:", this.props);

		return (
			<div>
				<Helmet title={this.props.title || "Unknown"}/>
				<HeaderBar title={this.props.title || "Unknown"} avatar={this.getAvatar(this.props.location)}/>
				<div className="Container-body">
					{this.props.children}
				</div>

			</div>
		)
	}
}

export default Container;