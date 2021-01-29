import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'
import PokemonInfo from './PokemonInfo'
import TypeButtons from "./TypeButtons";


export default function App() {
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/type/1/")
  const [currentPokemon, setCurrentPokemon] = useState("https://pokeapi.co/api/v2/pokemon/1/")
  const [typeName, setTypeName] = useState()
  const [pName, setPName] = useState()
  const [pId, setPId] = useState()
  const [spriteUrl, setSpriteUrl] = useState()
  const [spriteShinyUrl, setSpriteShinyUrl] = useState()
  const [stats, setStats] = useState([])
  const [abilities, setAbilities] = useState([])
  const [statNames, setStatNames] = useState([])
  const [pTypes, setPTypes] = useState([])
  const [pTypeUrls, setPTypeUrls] = useState([])
  const [pokemonNames, setPokemonNames] = useState([])
  const [pokemonUrls, setPokemonUrls] = useState([])
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true)
  const typeUrl = "https://pokeapi.co/api/v2/type"

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
    setLoading(false)
    setTypeName(res.data.name)
    setPokemonNames(res.data.pokemon.map(p => p.pokemon.name))
    setPokemonUrls(res.data.pokemon.map(p => p.pokemon.url))
  })
    axios.get(currentPokemon, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setPName(res.data.name)
      setPTypes(res.data.types.map(t => t.type.name))
      setPTypeUrls(res.data.types.map(t => t.type.url))
      setStats(res.data.stats.map(s => s.base_stat))
      setStatNames(res.data.stats.map(s => s.stat.name))
      setAbilities(res.data.abilities.map(a => a.ability.name))
      setSpriteUrl(res.data.sprites.front_default)
      setSpriteShinyUrl(res.data.sprites.front_shiny)
      setPId(res.data.id)
  })
    axios.get(typeUrl, {
    cancelToken: new axios.CancelToken(c => cancel = c)
  }).then(res => {
    setLoading(false)
    setTypes(res.data.results.map(t => t.name))
})
    return () => cancel()
  }, [currentPageUrl , currentPokemon])

  function changeType(newTypeUrl){
    setCurrentPageUrl(newTypeUrl)
  }

  function getType(){
    return (typeName)
  }

  function gotoPokemonInfo(url){
    setCurrentPokemon(url)
  }

  if (loading) return "Loading..."

  return (<>
  <PokemonInfo 
    pName={pName}
    pTypes={pTypes}
    stats={stats}
    statNames={statNames}
    abilities={abilities}
    spriteUrl={spriteUrl}
    pId={pId}
    spriteShinyUrl={spriteShinyUrl}
    gotoPokemonInfo={gotoPokemonInfo}
    changeType={changeType}
    pTypeUrls={pTypeUrls}
    />
  <div>----------------------</div>
  <TypeButtons 
    types={types}
    changeType={changeType}
  />
  <div>----------------------</div>
  <PokemonList 
    pokemonNames={pokemonNames}
    pokemonUrls={pokemonUrls}
    gotoPokemonInfo={gotoPokemonInfo}
    getType={getType}
    />
    
  </>
  );
}

