import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTile from "./HogTile";

function App() {
	const [greasedHogs, setGreasedHogs]= useState(false)

	const filteredHogs= hogs.filter((hog)=>{
		if(greasedHogs){
		    if(hog.greased){
		      return true
		} else {
			return false
		}
	} else{
		return true
}})	
	const hogTiles = filteredHogs.map((hog) => (
		<HogTile key= {hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]}/>
	))
			
	
	return (
		<div className="App">
			<Nav/>
			<button onClick={()=> setGreasedHogs(!greasedHogs)}>Greased</button>
			{hogTiles}
		</div>
	);
}

export default App;
