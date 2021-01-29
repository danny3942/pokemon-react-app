import React from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function PokemonInfo({pName, pTypes, stats, statNames, abilities, spriteUrl, pId, spriteShinyUrl}) {
    return (
        <>
        <div>{pName + " #" + pId}</div>
        <img src={spriteUrl} alt={"Sprite Unavailable"} />
        <img src={spriteShinyUrl} alt={"Sprite Unavailable"} />
        <div>----Type(s)----</div>
        <div>
        {pTypes.map(t => {
            return (<>
            |<text key={uuidv4()}>{t}</text>|
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
