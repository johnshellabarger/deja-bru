import '../App.css';
import Navbar from './Navbar';
import Home from './Home'
import Favorites from './Favorites';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'

function App() {
  const [breweries, setBreweries] = useState([])
  const [FormData, setFormData] = useState('')

  function handleChange(e){
    setFormData(e.target.value)
}

  console.log(breweries)
  
  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries?by_state=colorado')
    .then(resp => resp.json())
    .then(data => setBreweries(data))
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home breweries={breweries} handleChange={handleChange}/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
