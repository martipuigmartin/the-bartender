const Card = (props) => {
    const { item } = props;

    return (
        <div className={`pt-6 pb-12 ${item.strDrink}`} key={item.strDrink}>
            <div className="card  ">
                <div className="container w-100 mx-auto flex flex-col">
                    <div
                        className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2">

                        <div className="h-64 w-auto md:w-1/2">
                            <img
                                className="inset-0 h-full w-full object-cover object-center"
                                src={item.strDrinkThumb}
                                alt={item.strDrink}/>
                        </div>

                        <div
                            className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                            <h3 className="text-2xl max-char">
                                {item.strDrink}
                            </h3>
                            <p className="mt-2">
                                {item.strAlcoholic}
                            </p>
                            <p className="mt-2">
                                {item.strCategory}
                            </p>

                            <div className="mt-6 text-center">
                                <a href={`https://www.youtube.com/results?search_query=${item.strDrink} drink recipe`}
                                   target="_blank" rel="noopener noreferrer">
                                    <button
                                        className="bg-violet-800 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded-full">
                                        Watch Recipe
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
