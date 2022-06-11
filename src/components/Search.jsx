import {useState} from "react";

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <input type="text" name="name" placeholder="Search your drink"
               className=" outline-none border-none font-bold text-gray-900"
               onChange={(e) => setSearch(e.target.value)}
        />
    )
};

export default Search;
