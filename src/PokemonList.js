import React from 'react'

export default function Pokemon({ pokemon }) {
    return (
        <div>
           {pokemon.map(p => (
               <div key={p} >{p}</div>
           ))} 
        </div>
    )
}
