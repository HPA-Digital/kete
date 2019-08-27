import React from 'react';
import './About.css';

import Container from '../Container';



class About extends React.Component {
	render(){
		return(
			<Container title="About" {...this.props}>
				<div className="About">
					<h2>
						About Kuīni
					</h2>
					<p>
					Kia ora. I’m Kuīni <span role="img" aria-label="Crown">👑</span> and I’m here to help you quit smoking. I’m a chatbot – sorta a robot kaiāwhina – being created now with wāhine Māori for wāhine queens <span role="img" aria-label="Doctor">👸🏽</span> like you.
					I’m here 24/7 for you. I’ve got daily check ins (to keep you on track Sis!) and a kete <span role="img" aria-label="Bag">👜</span> full of hacks, distractions and cool stuff to keep your mind, and your hands, busy over 30 days.
					I’m working with a team of quit experts and clinicians who were brought together by Te Hiringa Hauora / Health Promotion Agency. If you want to kōrero with a *real* person you can get in touch at <a href="www.facebook.com/Kuinicanhelp" target="_blank"> www.facebook.com/Kuinicanhelp</a> or via ‘help’ in our Messenger app. Ka rawe hoki!
					</p>

					<h2>
						Acknowledgements
					</h2>
					<p>
					Kuīni is a chatbot that has been created together with Māori wāhine as a digital support tool to help people, particularly Māori wāhine, to be more successful in their attempt to quit smoking. We know many people want to quit ‘cold turkey’ and Kuīni is here to help by walking alongside users over a 30-day period mentoring, challenging and supporting users.
					The development of Kuīni has been a collaborative effort involving a range of passionate contributors and supporters. Te Hiringa Hauora / The Health Promotion Agency (HPA) would like to thank and acknowledge the following for their mahi and contribution to this project:
					<ul>
						<li>
							<strong>The Māori wāhine and their whānau</strong> who openly shared their stories to help inform the research, providing insights and valuable feedback – ngā mihi nui ki a koutou katoa.
						</li>
						<li>
							<strong>Coco Solid a.k.a. Jessica Hansell (Ngāpuhi/Samoan/German)</strong> – for the content creation and our Kuīni persona.
						</li>
						<li>
							<strong>Xoë Hall (Kai Tahu/Danish/English)</strong> – for designing the avatars.
						</li>
						<li>
							<strong>IDIA – Indigenous Design & Innovation Aotearoa</strong> – for customer insights and product design input.
						</li>
						<li>
							<strong>Papakura Marae Health Clinic team</strong> – for feedback, input and supporting user testing with Māori wāhine from South Auckland.
						</li>
						<li>
							<strong>Kōkiri Marae Health and Social Services</strong> and <strong>Takiri Mai te Ata Regional Stop Smoking Service</strong> – for feedback and insights with hapū māmā.
						</li>
						<li>
							<strong>John McMenamin</strong> – for medical review and oversight.
						</li>
						<li>
							<strong>Kupu o te Rā RSS</strong> – for providing the Māori word of the day.
						</li>
						<li>
							<strong>Te Hiringa Hauora</strong> team
						</li>

					</ul>
					We are always looking for opportunities to partner with other agencies and organisations on projects. <a href="https://www.hpa.org.nz/contact">Get in touch</a> if you have a great idea that could involve Kuīni.
					</p>

					<h2>
						Contacts
					</h2>
					<p>
						<h3>
							Te Hiringa Hauora / Health Promotion Agency
						</h3>
						<ul>
							<li>
								General enquiries: Ph <a href="tel:+6449170060">04 917 0060</a>, <a href="mailto:enquiries@hpa.org.nz">enquiries@hpa.org.nz</a>
							</li>
							<li>
								Media enquiries: <a href="mailto:communications@hpa.org.nz">communications@hpa.org.nz</a>
							</li>
						</ul>
					</p>
				</div>
			</Container>
		)
	}
}

export default About