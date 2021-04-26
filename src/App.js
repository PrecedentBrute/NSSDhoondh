import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cards from "./Components/Cards/Cards";
import SearchFilters from "./Components/SearchFilters/SearchFilters"

const App = () => (
    <div>
        <h1 style={{textAlign:"center"}}>NSS DHOONDH</h1>
        <SearchFilters />
        <Cards />
    </div>
);

export default App;