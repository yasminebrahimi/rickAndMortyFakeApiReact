import { characters } from "../data/data"


import "./App.css";
import Navbar from "./components/NavBar";
import CharacterList from "./components/CharacterList"
import CharacterDetail from "./components/CharacterDetail"



function App(){
  return <div className="app">
    <Navbar/>
    <div className="main">
      <CharacterList characters={characters}/>
      <CharacterDetail />
    </div>
  </div>
  
}