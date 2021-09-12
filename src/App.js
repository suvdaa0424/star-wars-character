import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import CharacterProfile from './pages/CharacterProfile';
import React, { useEffect, useState } from "react";
import Header from './components/Header';




function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data) -checking what kind of data we should store
        setCharacters(data.results)
      })
  }, [])
  // if (!characters) {
  //   return ''
  // }
  return (
    <Router>
      <div className="App">
        <Header />
      {/* <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <CharacterList characters={characters}/>
          </Route>
          <Route path="/characters/:index">
            <CharacterProfile characters={characters}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
