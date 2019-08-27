import React from 'react';

import './TopFive.css'

import Star from '../../static/star.svg'
import StarIcon from './star-icon.gif';

class TopFive extends React.Component{
	// constructor(props){
	// 	super(props)
	// }

	render(){
		return (
			<div className="TopFive-container">
				<div className="TopFive-header">
					<div className="TopFive-title">
						YOUR TOP FIVE
					</div>
					<div className="TopFive-icon">
						<img className="TopFive-star" src={Star} alt="Star"/>
					</div>
				</div>

				<div className="TopFive-list">
					<ul>
						{this.props.data.map((item, i) => {
							return (
								<li key={i}>
									{/* <div className="TopFive-list-icon" style={{
										backgroundImage: `url(${StarIcon})`
									}}></div> */}
									<div className="TopFive-list-text">
										{item}
									</div>

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
