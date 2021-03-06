import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';
import { PokemonDetails } from './components/PokemonDetail/PokemonDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route path='/pokemon' component={CreatePokemon} />
          <Route path='/detail/:id' component={PokemonDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
