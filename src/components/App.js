import '../App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Home from './Home'
import Favorites from './Favorites';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import VisitedBreweriesCollection from './VisitedBreweriesCollection';

function App() {
  const [breweries, setBreweries] = useState([])
  const [formData, setFormData] = useState({
    city: '',
    state: ''
  })
  const [favorites, setFavorites] = useState([])
  const [visitedBreweries, setVisitedBreweries] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/favorites')
    .then(resp => resp.json())
    .then(data => setFavorites(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/visited')
    .then(resp => resp.json())
    .then(data => setVisitedBreweries(data))
  }, [])

  function handleFavorites(id){
    const favoritedBrewery = breweries.find(brewery => brewery.id === id)
    if(!favorites.find(fav => fav.id === id)){
      setFavorites([...favorites, favoritedBrewery])
    }
    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(favoritedBrewery),
    }, [])
  }

  function handleVisited(id){
    const clickedBrewery = breweries.find(brewery => brewery.id === id)
    if(!visitedBreweries.find(visited => visited.id === id)){
      setVisitedBreweries([...visitedBreweries, clickedBrewery])
      fetch(`http://localhost:3000/visited`, {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(clickedBrewery)
    })
    } else {
      const arrayWithRemovedBrewery = visitedBreweries.filter(visited => visited.id !== id)
      console.log(arrayWithRemovedBrewery)
      setVisitedBreweries(arrayWithRemovedBrewery)
      fetch(`http://localhost:3000/visited/${id}`, {
      method: 'DELETE'
      })
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
    fetch(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${formData.city}&by_state=${formData.state.toLowerCase()}`)
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
            favorites={favorites}
            visitedBreweries={visitedBreweries}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleFavorites={handleFavorites}
            handleVisited={handleVisited}
          />
        </Route>
        <Route exact path='/visited'>
          <VisitedBreweriesCollection 
            visitedBreweries={visitedBreweries}
          />
        </Route>
        <Route exact path='/favorites'>
          <Favorites 
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
