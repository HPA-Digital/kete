import React from 'react';
import './Lost.css'

import Container from '../Container';

import { Link } from 'react-router-dom';

class Lost extends React.Component {

	render(){
		return (
			<Container title="Need help?" {...this.props}>
				<div className="Lost">
					Why don't you try one of these?

					<Link to="/rant">
						<button>
							Rant
						</button>
					</Link>

					<Link to="/distractions">
						<button>
							101+ Things to do
						</button>
					</Link>
				</div>


			</Container>
		)
	}
}

export default Lost;