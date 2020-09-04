import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams'

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
            {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
        </div>
    )


}
ReactDOM.render(<App />, document.getElementById("root"));
