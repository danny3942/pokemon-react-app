import React from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function PokemonList({ pokemonNames, pokemonUrls, gotoPokemonInfo}) {
    return (<>
            <div>
           {pokemonUrls.map((url, index) => {
               return (<>
                |<button key={uuidv4()} onClick={() => gotoPokemonInfo(url)}>{pokemonNames[index]}</button>|
               </>
               )
           })}

           </div>
        </>
    )
}
