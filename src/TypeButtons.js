import React from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function TypeButtons({ types, changeType}) {
    const baseUrl = "https://pokeapi.co/api/v2/type/"
    return (
        <>
            <div>
            {types.map((t, index) =>
               { return (<>
                |{(t!=="unknown" && t!=="shadow") && <button id={t} key={uuidv4()} onClick={() => changeType(baseUrl + (index+1))}>{t}</button>}|
                </>)})}   
            </div>
        </>
    )
}

