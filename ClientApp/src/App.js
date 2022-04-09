import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home  from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Games } from './components/Games';
import { Penalty } from './components/Penalty';
import Quiz  from './components/Quiz'; 
import { Community } from './components/Community';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/games' component={Games} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/penalty' component={Penalty} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/community' component={Community} />
      </Layout>
    );
  }
}
