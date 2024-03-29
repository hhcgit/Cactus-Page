import React from 'react';
import './App.css';
import Welcome from '../../Routes/Welcome';
import Blog from '../../Routes/Blog';
import { Route, Switch } from 'react-router-dom';
import Login from '../../Routes/Login';



export default class App extends React.Component{
  state ={
    hasError:false
  }

  static getDerivedStateFromError(error) {
    return {
      hasError:true
    }
  }
  
  render(){
    return (
      <body>
        <Switch>
          <Route 
            exact
            path={'/'}
            component={Welcome}
          />
          <Route
            path={"/blog"}
            component={Blog}
          />
          <Route
            path={"/login"}
            component={Login}
          />
        </Switch>
      </body>
    )
  }
}