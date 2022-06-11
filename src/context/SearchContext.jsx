import React, {useEffect, useState} from 'react';
import axios from "axios";

export const SearchContext = React.createContext();

export const SearchProvider = ({children}) => {

    const [search, setSearch] = useState('');
    const [count, setCount] = useState([]);

    useEffect(() => {
        getData().then(console.log(count));

    }
    , [search]);

    const getData = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
        setCount(response.data.drinks);
    }

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}