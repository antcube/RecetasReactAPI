import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {
    const favorites = useAppStore(state => state.favorites);

    return (
        <>
            <h1 className="font-extrabold text-4xl lg:text-6xl">Recetas</h1>
            {favorites.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 my-10">
                {favorites.map(drink => (
                    <DrinkCard 
                        key={drink.idDrink}
                        drink={drink}
                    />
                ))}
            </div>
            ) : (
                <p className="text-center text-xl my-8">No tienes recetas favoritas, comienza a agregarlas</p>
            )}
        </>
    )
}
