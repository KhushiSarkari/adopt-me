import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './components/SearchParams'
import Details from './components/Details';
import ThemeContext from "./context/ThemeContext";

const App = () => {
    const themeHook = useState("peru");
    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>

                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    )


}
ReactDOM.render(<App />, document.getElementById("root"));
