import React from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function PokemonInfo({pName, pTypes, stats, statNames, abilities, spriteUrl, spriteShinyUrl, gotoPokemonInfo, changeType, pId}) {
    const altText = "Sprite Unavailable"
    return (
        <>
        <div>{pName + " #" + pId}</div>
        {spriteUrl && <img src={spriteUrl} alt={altText} />}
        {spriteShinyUrl && <img src={spriteShinyUrl} alt={altText} />}
        <div>
        {pId !== 1 && <button onClick={() => gotoPokemonInfo((pId - 1))} >Previous Pokemon</button>}<button onClick={() => gotoPokemonInfo((pId + 1))}>Next Pokemon</button>
        </div>
        <div>----Type(s)----</div>
        <div>
        {pTypes.map((t, index) => {
            return (<>
            |<button id={t} key={uuidv4()} onClick={() => changeType(t)}>{t}</button>|
            </>)})}
        </div>
            <div>----Base-Stats----</div>
        <div>
        <br/>
        {stats.map((s, index) => {
            return (<>
            <label id={statNames[index]} key={uuidv4()}>{statNames[index] + " : " + s}</label>
            </>)})}
        </div>
        <br/>
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
