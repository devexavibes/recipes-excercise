import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';

class App extends Component {
  state = {
    contents : [
                {
                  'title':null,
                  'imageList':{
                    'landscape32medium2x':{
                      'url':null
                    }
                  }
                }
    ]
  }

  nowLoadData = (data)=>{
    this.setState({contents:data});
  }

  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/recipes'} className="nav-link">Recipes</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/recipes' >
                <Recipes stateData={this.state.contents} loadData={this.nowLoadData}/>
              </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;