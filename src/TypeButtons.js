import React from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function TypeButtons({ types, changeType}) {
    return (
        <>
            <div>
            {types.map(t =>
               { return (<>
                |{(t!=="unknown" && t!=="shadow") && <button id={t} key={uuidv4()} onClick={() => changeType(t)}>{t}</button>}|
                </>)})}   
            </div>
        </>
    )
}

