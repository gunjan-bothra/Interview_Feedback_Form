import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Form from './pages/Form';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet'

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div>
    <Helmet>
      <title>Candidate Feedback Form</title>
    </Helmet>
    <Router history={Router.browserHistory}>
      <div className="App" style={{width:'80%', margin:'auto'}}>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path='/' component={Form}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
    </div>
  );
}

export default App;
