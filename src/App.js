import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import PokemonInfo from './PokemonInfo'
import TypeButtons from './TypeButtons'


export default function App() {
  const [currentPageUrl, setCurrentPageUrl] = useState("normal")
  const [currentPokemon, setCurrentPokemon] = useState(1)
  const [pokemonMainType,setPokemonMainType] = useState([])
  const [pId, setPId] = useState()
  const [pName, setPName] = useState()
  const [spriteUrl, setSpriteUrl] = useState()
  const [spriteShinyUrl, setSpriteShinyUrl] = useState()
  const [stats, setStats] = useState([])
  const [abilities, setAbilities] = useState([])
  const [statNames, setStatNames] = useState([])
  const [pTypes, setPTypes] = useState([])
  const [pokemonNames, setPokemonNames] = useState([])
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true)
  var Pokedex = require('pokedex-promise-v2')
  useEffect(() => {
    setLoading(true)
    var P = new Pokedex();
    P.getTypeByName(currentPageUrl) // with Promise
    .then(function(res) {
      setLoading(false)
      setPokemonNames(res.pokemon.map(p => p.pokemon.name))
    })
    .catch(function(error) {
      setLoading(false)
      console.log('There was an ERROR: ', error);
    })
    setLoading(true)
    P.getPokemonByName(currentPokemon)
      .then(function(res) {
        setLoading(false)
        setPName(res.name)
        setSpriteUrl(res.sprites.front_default)
        setSpriteShinyUrl(res.sprites.front_shiny)
        setStats(res.stats.map(s => s.base_stat))
        setStatNames(res.stats.map(s => s.stat.name))
        setAbilities(res.abilities.map(a => a.ability.name))
        setPTypes(res.types.map(t => t.type.name))
        setPId(res.id)
    })
      .catch(function(error) {
        setLoading(false)
        console.log('There was an ERROR: ', error);
      })
    setLoading(true)
    P.getTypesList()
      .then(function(res) {
        setLoading(false)
        setTypes(res.results.map(t => t.name))
      })
      .catch(function(error) {
        setLoading(false)
        console.log('There was an ERROR: ', error);
      })
  }, [currentPageUrl , currentPokemon, Pokedex])
  useEffect(() => {
    var P = new Pokedex()
    setPokemonMainType(pokemonNames.map(function(name) {
      var temp
      P.getPokemonByName(name)
      .then(function(res) {
        setLoading(false)
        temp = res.types[0].type.name
      })
      .catch(function(error) {
        setLoading(false)
        console.log('There was an ERROR: ', error);
        temp = error
      })
      return temp
    }))
  }, [pokemonNames, Pokedex])

  function changeType(newTypeUrl){
    setCurrentPageUrl(newTypeUrl)
  }

  function gotoPokemonInfo(url){
    setCurrentPokemon(url)
  }

  if (loading) return "Loading..."

  console.log(pokemonMainType)

  return (<>
  <PokemonInfo 
    pName={pName}
    pTypes={pTypes}
    stats={stats}
    statNames={statNames}
    abilities={abilities}
    spriteUrl={spriteUrl}
    spriteShinyUrl={spriteShinyUrl}
    gotoPokemonInfo={gotoPokemonInfo}
    changeType={changeType}
    pId={pId}
    />
  <div>----------------------</div>
  <TypeButtons 
    types={types}
    changeType={changeType}
  />
  <div>----------------------</div>
  <PokemonList 
    pokemonNames={pokemonNames}
    gotoPokemonInfo={gotoPokemonInfo}
    pokemonMainType={pokemonMainType}
    />
    
  </>
  );
}

