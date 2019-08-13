import React from 'react';

import './OtherIdeas.css'

import _ from 'lodash';

class OtherIdeas extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			length: 5
		}
	}

	increaseLength(n){
		this.setState({
			length: this.state.length + n
		})
	}

	render(){
		return (
			<div>

				<div className="OtherIdeas-list">
					<ul>
						{_.slice(this.props.data, 0, this.state.length).map((item, i) => {
						return (
							<li key={i}>
								{item}
							</li>
						)
					})}
					</ul>
				</div>

				<div className="OtherIdeas-footer">
					<button className="OtherIdeas-more">
						More...
					</button>
				</div>

			</div>
		)
	}
}

export default OtherIdeas;