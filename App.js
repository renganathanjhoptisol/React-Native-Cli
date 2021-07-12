import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './src/Reducers/index';
import CounterAction from './src/Actions/CounterAction'


export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <Provider store={store}>
        <CounterAction/>
     </Provider>
    )
  }
}

export default App;
