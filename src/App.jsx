import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [fullPokemonList, setFullPokemonList] = useState([])

  useEffect(() =>{
      fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0', {mode: "cors"})
      .then((response) => response.json())
      .then((response) => setFullPokemonList(response))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    console.log(fullPokemonList)
  }, [fullPokemonList])

  

  return (
    <>
      <Outlet /> 
    </>
  )
}

export default App
