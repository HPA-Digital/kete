import React from 'react'
import {Helmet} from 'react-helmet'

import Container from '../Container';

class Rant extends React.Component {
	// constructor(props){
	// 	super(props)
	// }

	render(){
		return (
			<Container title="Rant" {...this.props}>
				<Helmet title="Kete | Rant"/>
				<p>
					Rant Placeholder
				</p>
			</Container>
		);
	}
}

export default Rant