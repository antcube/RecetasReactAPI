import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps) {
    const selectRecipe = useAppStore(state => state.selectRecipe);

    return (
        <div
            className="border shadow-lg rounded-md overflow-hidden"
        >
            <div className="overflow-hidden">
                <img
                    className="hover:scale-110 hover:rotate-1 transition duration-300"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                />
            </div>
            <div className="p-5">
                <h2 className="text-xl xl:text-2xl truncate font-bold">
                    {drink.strDrink}
                </h2>
                <button
                    className="bg-orange-400 hover:bg-orange-500 w-full p-3 text-white text-lg font-bold uppercase rounded-lg mt-5 transition duration-300"
                    type="button"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    Ver Receta
                </button>
            </div>
        </div>
    );
}
