import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Fragment } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if(localStorage.token)
{
    setAuthToken(localStorage.token);
}

const  App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar/>
              <div className="container">
                <Alerts/>
                <Switch>
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/login' component={Login}/>
                  <PrivateRoute exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
