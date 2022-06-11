const Tittle = (props) => {
    return (
        <>
            <h1
                className="inline-flex h-20 text-3xl pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                The Bartender 🍸
            </h1>
            <div className="flex flex-wrap justify-between flex-col">
                <p>The Bartender is an APP that helps you</p>
                <p>to create your own cocktail. </p>
                <p>Search for your favorite cocktail </p>
                <p>and know how to make it.</p>
                <input type="text" name="name" placeholder="...Search your drink or"
                       className="outline-none border-none font-bold text-gray-900"
                       onChange={(e) => (props.getInput(e))}
                       dir="rtl"
                />
            </div>
        </>
    )
};

export default Tittle;
