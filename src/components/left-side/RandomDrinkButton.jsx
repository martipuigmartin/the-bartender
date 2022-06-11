const RandomDrinkButton = (props) => {
    return (
        <button
            onClick={() => (props.getRandomDrink())}
        >
            <p>We recommend you something</p>
        </button>
    )
};

export default RandomDrinkButton;
