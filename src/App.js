import React from 'react';
import './App.css';

import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Distractions from './components/Distractions';
import Rant from './components/Rant';

function App() {
  return (
    <div className="App">
		<Helmet title="Test">

		</Helmet>
		<Router>
			<Route path="/rant" component={Rant} />
			<Route path="/distraction" component={Distractions} />
		</Router>
    </div>
  );
}

export default App;
