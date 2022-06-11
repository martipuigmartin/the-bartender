import Search from "./Search";

const Tittle = () => {
    return (
        <div className="w-full md:w-1/2 md:pr-32 md:order-1 text-gray-900">
            <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">
                <h1
                    className="inline-flex h-20 text-3xl pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                    The Bartender 🍸
                </h1>
                <div className="flex flex-wrap justify-between flex-col">
                    <p>The Bartender is an APP that helps you</p>
                    <p>to create your own cocktail. </p>
                    <p>Search for your favorite cocktail </p>
                    <p>and know how to make it.</p>
                    <Search/>
                </div>
            </div>
        </div>
    )
};

export default Tittle;
