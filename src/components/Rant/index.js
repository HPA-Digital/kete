import React from 'react'
import {Helmet} from 'react-helmet'
import './Rant.css'

import Container from '../Container';
import KuiniButton from '../KuiniButton';

import Notebook from '../../static/notebook.svg'


class Rant extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			rant: ""
		}

		this.closeWindow = this.closeWindow.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({
			rant: e.target.value
		})
	}

	closeWindow(){
		window.MessengerExtensions.requestCloseBrowser((success) => {

		}, (err) => {
			console.error(err);
			this.setState({
				rant: ""
			})
		});
	}

	render(){
		return (
			<Container title="Rant..." {...this.props}>
				<Helmet title="Kete | Rant"/>

				<div className="Rant">
					<section className="Rant-title">
						<div className="Rant-description">
							This is your top-secret place to
							rant, vent, offload and clear
							your whakaaro (thoughts).
						</div>
						<img src={Notebook} className="Rant-description-image" alt="Notebook"></img>
					</section>

					<section className="Rant-input-container">
						<textarea className="Rant-input" value={this.state.rant} onChange={this.handleChange} type="text" placeholder="Write here...">
						</textarea>
					</section>

					<section className="Rant-footer">
						<div>
							<KuiniButton title="Delete..." image={Notebook} action={this.closeWindow}/>
						</div>
						<div className="Rant-footer-text">
							Tip: If you want to save this, copy and paste your ‘rants’ elsewhere.
						</div>
					</section>
				</div>



			</Container>
		);
	}
}

export default Rant