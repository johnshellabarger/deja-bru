import '../App.css';
import Header from './Header';
import Home from './Home'
import { useEffect, useState } from 'react';

function App() {
  const [breweries, setBreweries] = useState([])

  console.log(breweries)
  
  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries?by_state=colorado')
    .then(resp => resp.json())
    .then(data => setBreweries(data))
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Home 
        breweries={breweries}
      />
    </div>
  );
}

export default App;
