import React, {useState} from "react"

function HogTile ({name, image, greased, weight, specialty, medal}) {
    const [displayHog, setDisplayHog]= useState(false)
    function handleClick (){
        setDisplayHog(!displayHog)
    }

    return(
        <div className="hog-tile" onClick={handleClick}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            {displayHog ? <p>{weight}</p> : null}
            {displayHog ? <p>{specialty}</p> : null}
            {displayHog ? <p>{greased ? "greased": "not greased"}</p> : null}
            {displayHog ? <p>{medal}</p> : null}
        </div>
    )
}
export default HogTile