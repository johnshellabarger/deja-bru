import '../App.css';
import Navbar from './Navbar';
import Home from './Home'
import Favorites from './Favorites';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

function App() {
  const [breweries, setBreweries] = useState([])
  const [formData, setFormData] = useState(null)

  function handleChange(e){
    setFormData(encodeURIComponent(e.target.value))
  }

  function handleSubmit(e){
    fetch(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${formData}&by_state=colorado`)
    .then(resp => resp.json())
    .then(data => setBreweries(data))
  }
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home breweries={breweries} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
