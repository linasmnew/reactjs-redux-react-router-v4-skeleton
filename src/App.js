import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import Home from './components/Home';
import TodoPage from './components/TodoPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div className='App'>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/todo" component={TodoPage} />
              <Route render={() => <p>Not Found</p> } />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
