import './App.css'
import NavBar from './components/navbar'
import RouteComponent from './components/routecomponent'

function App() {
  return (
    <div>
        <div class="sticky-top">
            <NavBar />
        </div>
        <div>
            <RouteComponent />
        </div>
      </div>
  );
}

export default App;
