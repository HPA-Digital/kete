import React from 'react';
import './App.css';

import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Distractions from './components/Distractions';
import Rant from './components/Rant';
import Lost from './components/Lost';
import About from './components/About';
import Privacy from './components/Privacy';

function App() {
  return (
    <div className="App">
		<Helmet title="Test">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans|Sree+Krushnadevaraya|Swanky+and+Moo+Moo&display=swap" rel="stylesheet" />
		</Helmet>
		<Router>
			<Switch>
				<Route path="/rant" component={Rant} />
				<Route path="/distractions" component={Distractions} />
				<Route path="/about" component={About} />
				<Route path="/privacy" component={Privacy} />
				<Route path="*" component={Lost}/>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
