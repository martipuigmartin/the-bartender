import {useEffect, useState} from "react";


import axios from "axios";
import './index.css';
import {LeftSide, RightSide} from './components';

const App = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState();
    const [firstSearch, setFirstSearch] = useState(true);


    const getInput = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length > 0) {
            setFirstSearch(false);

        }
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

                />
                <RightSide
                    data={data}
                    firstSearch={firstSearch}
                    search={search}

                />
            </div>
        </div>
    );
};

export default App;
