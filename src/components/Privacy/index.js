import React from 'react';
import './Privacy.css';

import Container from '../Container';



class Privacy extends React.Component {
	render(){
		return(
			<Container title="Privacy" {...this.props}>
				<div className="Privacy">
					<h2>
						About Kuīni
					</h2>

				</div>

			</Container>
		)
	}
}

export default Privacy