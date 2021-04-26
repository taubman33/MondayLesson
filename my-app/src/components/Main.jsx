import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import ContentContainer from './ContentContainer'
import Home from './Home'
import Searchbar from './Searchbar'


function Main() {

    const [searchString, setSearchString] = useState('')


    const handleChange =(e) => {
        setSearchString(e.target.value)
        console.log(searchString)
     } 

    const handleClick = (ev) => {
        ev.preventDefault() 
        console.log(`working! ${searchString}`)
        
    }
    
    return (
    <div className="Main-container">

        <div className="Main-searchbar">
         <Searchbar searchString={searchString}
                    handleClick={handleClick}
                    handleChange={handleChange}
                    setSearchString={setSearchString}
                    />
        </div> 

         <div className="Main">
         <Route exact path="/" component={Home}/>
         <Route exact path ="/appcontent" render={ContentContainer}/>
        </div>


        </div>
    );
}

export default Main;