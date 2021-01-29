import React from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function PokemonList({ pokemonNames, gotoPokemonInfo, pokemonMainType}) {
    return (<>
            <div>
           {pokemonNames.map((name, index) => {
               return (<>
                |<button id={pokemonMainType[index]} key={uuidv4()} onClick={() => gotoPokemonInfo(name)}>{name}</button>|
               </>
               )
           })}

           </div>
        </>
    )
}
