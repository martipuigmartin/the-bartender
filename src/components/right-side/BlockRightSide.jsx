import Card from "./Card";

const BlockRightSide = (props) => {
    const data = props.data;
    const inputEmpty = props.inputEmpty;

    if (inputEmpty) {
        return (
            <div className="w-full md:w-1/2 order-1 md:order-2 text-gray-900">
                <div className="max-w-md leading-loose tracking-tight ">
                    <div className="flex flex-wrap justify-between flex-col ">
                        <div className="flex flex-col md:mt-48 mt-12 justify-center items-center">
                            <h2 className="text-2xl font-bold text-brand-accent">
                                Search for your favorite cocktail.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full md:w-1/2 order-1 md:order-2 text-gray-900">
            <div className="max-w-md leading-loose tracking-tight ">
                <div className="flex flex-wrap justify-between flex-col ">
                    {data === null ?
                        <div className="flex flex-col md:mt-48 mt-12 justify-center items-center">
                            <h2 className="text-2xl font-bold text-brand-accent">
                                Sorry, we couldn't find your drink.
                            </h2>
                        </div>
                        : data.map(item => (
                            <Card
                                item={item}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
};

export default BlockRightSide;
