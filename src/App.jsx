import {useEffect, useState} from "react";
import axios from "axios";

import {LeftSide, RightSide} from './components';

import './index.css';

const App = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState();
    const [inputEmpty, setInputEmpty] = useState(true);

    const getInput = (e) => {
        setSearch(e.target.value);
        setInputEmpty(e.target.value.length === 0);
    };

    const getRandomDrink = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => {
                    setInputEmpty(false);
                    setData(res.data.drinks);
                }
            )
    };

    const getData = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
        setData(response.data.drinks);
    };

    useEffect(() => {
        getData();
    }, [search]);

    return (
        <div className="text-gray-700 font-bold montserrat text-xl">
            <div className="p-6 sm:p-10 md:p-16 flex flex-wrap">
                <LeftSide
                    getInput={getInput}
                    getRandomDrink={getRandomDrink}
                />
                <RightSide
                    data={data}
                    inputEmpty={inputEmpty}
                    search={search}
                />
            </div>
        </div>
    );
};

export default App;
