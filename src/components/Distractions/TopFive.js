import React from 'react';

import './TopFive.css'

import Star from '../../static/star.svg'

class TopFive extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="TopFive-container">
				<div className="TopFive-header">
					<div className="TopFive-title">
						<span>Your Top Five</span>
					</div>
					<div className="TopFive-icon">
						<img className="TopFive-star" src={Star}/>
					</div>
				</div>

				<div className="TopFive-list">
					<ul>
						{this.props.data.map((item, i) => {
							return (
								<li key={i}>
									{item}
								</li>
							)
						})}
					</ul>
				</div>

			</div>
		)
	}
}

export default TopFive;
