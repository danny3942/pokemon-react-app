import React from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function PokemonInfo({pName, pTypes, stats, statNames, abilities, spriteUrl, pId, spriteShinyUrl, gotoPokemonInfo, changeType, pTypeUrls, spriteAlt}) {
    const basePokemonUrl = "https://pokeapi.co/api/v2/pokemon/"
    const altText = "Sprite Unavailable"
    return (
        <>
        <div>{pName + " #" + pId}</div>
        {spriteUrl && <img src={spriteUrl} alt={altText} />}
        {spriteShinyUrl && <img src={spriteShinyUrl} alt={altText} />}
        {spriteAlt && <img src={spriteAlt} alt={altText}/>}
        <div>
        {pId !== 1 && <button onClick={() => gotoPokemonInfo(basePokemonUrl + (pId - 1))} >Previous Pokemon</button>}<button onClick={() => gotoPokemonInfo(basePokemonUrl + (pId + 1))}>Next Pokemon</button>
        </div>
        <div>----Type(s)----</div>
        <div>
        {pTypes.map((t, index) => {
            return (<>
            |<button id={t} key={uuidv4()} onClick={() => changeType(pTypeUrls[index])}>{t}</button>|
            </>)})}
        </div>
            <div>----Base-Stats----</div>
        <div>
        {stats.map((s, index) => {
            return (<>
            |<text key={uuidv4()}>{statNames[index] + " : " + s}</text>|
            </>)})}
        </div>
            <div>----Abilities----</div>
        <div>
        {abilities.map(a => {
            return (<>
                |<text key={uuidv4()}>{a}</text>|
            </>)})}
            </div>
        </>
    )
}
