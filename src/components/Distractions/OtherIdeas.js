import React from 'react';

import './OtherIdeas.css'

import _ from 'lodash';

import fastForward from '../../static/fast-forward.svg'

import KuiniButton from '../KuiniButton';

class OtherIdeas extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			length: 5
		}

		this.increaseLength = this.increaseLength.bind(this);
		this.renderFooter = this.renderFooter.bind(this);
	}

	increaseLength(){
		this.setState({
			length: this.state.length + 5
		})
	}

	renderFooter(){
		if(this.state.length >= this.props.data.length){
			return (
				<div className="OtherIdeas-footer-end">
					End of List
				</div>
			)
		}
		else {
			return (
				<KuiniButton title="More..." image={fastForward} action={this.increaseLength}/>
			)
		}
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
					{this.renderFooter()}
				</div>

			</div>
		)
	}
}

export default OtherIdeas;