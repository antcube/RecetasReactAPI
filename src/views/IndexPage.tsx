import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
    const drinks = useAppStore(state => state.drinks);
    const hasDrinks = useMemo(() => drinks.drinks.length, [drinks]);

    return (
        <>
            <h1 className="font-extrabold text-4xl lg:text-6xl">Recetas</h1>
            {hasDrinks ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 my-10">
                    {drinks.drinks.map(drink => (
                        <DrinkCard 
                            key={drink.idDrink}
                            drink={drink}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-xl my-8">No hay recetas, realice una búsqueda para visualizar las bebidas</p>
            )}
        </>
    )
}
