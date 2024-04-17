import React from "react";


const Filtre =movies.Filtre((movie)=> {
    return(
        <div className='filtre'>
             <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Filter by Title.." title="Type in a name"/>
             <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Filter by rating" title="Type in a name"/>
                    
                </div>
            

}
export default Filtre