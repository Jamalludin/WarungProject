import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import Register from './pages/Register';

type Props = {};
export default class Routes extends Component<Props> {
  render() {
    return (
        <Router>
           <Stack key='root' hideNavBar = {true} >
             <Scene key='Login' component={Login} title='Login' initial={true}/>
             <Scene key='Register' component={Register} title='Register'/>
           </Stack>
        </Router>
    );
  }
}
