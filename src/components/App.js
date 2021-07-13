import '../App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Home from './Home'
import Favorites from './Favorites';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

function App() {
  const [breweries, setBreweries] = useState([])
  const [formData, setFormData] = useState({
    city: '',
    state: ''
  })
  const [favorites, setFavorites] = useState([])

  function handleFavorites(id){
    const favoritedBrewery = breweries.find(brewery => brewery.id === id)
    if(!favorites.find(fav => fav.id === id)){
      setFavorites([...favorites, favoritedBrewery])
    }
  }

  function handleChange(e){
    let name = e.target.name
    let value = encodeURIComponent(e.target.value)
    setFormData({
      ...formData,
      [name]:value
    })
  }

  function handleSubmit(e){
    fetch(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${formData.city}&by_state=${formData.state}`)
    .then(resp => resp.json())
    .then(data => setBreweries(data))
  }
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
            <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home
            breweries={breweries}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleFavorites={handleFavorites}
          />
        </Route>
        <Route exact path='/favorites'>
          <Favorites 
            favorites={favorites}
            handleFavorites={handleFavorites}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
