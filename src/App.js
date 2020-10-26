import './App.css';
import {Route, BrowserRouter as Router,Switch, Link} from 'react-router-dom';
import Home from './components/home'
import AboutUs from './components/aboutus'
import ContactUs from './components/contactus';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">Expenses Manager</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="aboutus">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/aboutus' component={AboutUs}/>
          <Route exact path='/contactus' component={ContactUs}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
