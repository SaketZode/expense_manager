import './App.css'
import RouteComponent from './components/routecomponent'

function App() {
  return (
    <div>
      <div class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Expenses Manager</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/aboutus">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <RouteComponent />
      </div>
    </div>
  );
}

export default App;
