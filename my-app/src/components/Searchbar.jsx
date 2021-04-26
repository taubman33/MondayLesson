import React from 'react';


function Searchbar({handleChange, handleClick, searchString}) {
    return (
        <div className ="searchbar">
            <form onSubmit={handleClick}>
                <input type="text"
                       placeholder="search here!"
                       onChange={handleChange}
                       value={searchString}>     
                </input>


                <button type="submit">
                Click Me!
                </button>



            </form>


            
        </div>
    );
}

export default Searchbar;


