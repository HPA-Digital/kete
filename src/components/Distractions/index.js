import React from 'react';

import _ from 'lodash';

import Container from '../Container';
import './Things.css';
import TopFive from './TopFive';
import OtherIdeas from './OtherIdeas'

import Data from './data.json';

class Distractions extends React.Component {
	constructor(props){
		super(props);

		this.state = this.getTopFiveData();
	}

	getTopFiveData(){

		let data = _.shuffle(Data.lines);

		return {
			top: _.slice(data, 0, 5),
			data: _.slice(data, 5),
		}

	}

	render(){

		return (
			<Container title="101+ Things to do..." {...this.props}>
				<div className="Things-container">
					<div className="Things-header">
						Get out and about or try something
						new. It’s important to keep yourself
						busy and find new ways to deal with
						daily stresses when you quit.
					</div>
					<TopFive data={this.state.top} />
					<OtherIdeas data={this.state.data}/>

				</div>

			</Container>
		);
	}
}

export default Distractions