import Tittle from "./Tittle";
import RandomDrinkButton from "./RandomDrinkButton";

export const BlockLeftSide = (props) => {
    return (
        <div className="w-full md:w-1/2 md:pr-32 md:order-1 text-gray-900">
            <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">
                <Tittle
                    getInput={props.getInput}
                />
                <div className="flex flex-wrap justify-between flex-col">
                    <RandomDrinkButton
                        getRandomDrink={props.getRandomDrink}
                    />
                </div>
            </div>
        </div>
    )
};

export default BlockLeftSide;
