import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { SearchFilter } from "../types";

export default function Header() {
    const [searchFilter, setSearchFilter] = useState<SearchFilter>("");

    const { pathname } = useLocation();
    const isHome = useMemo(() => pathname === "/", [pathname]);

    const fetchCategories = useAppStore(state => state.fetchCategories);
    const categories = useAppStore(state => state.categories);
    const searchRecipes = useAppStore(state => state.searchRecipes);

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchFilter(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRecipes(searchFilter);
    }

    return (
        <header className={`${isHome ? 'bg-header bg-center bg-no-repeat bg-cover' : 'bg-slate-800'}`}>
            <div className="w-[90%] max-w-7xl mx-auto py-16 p-5">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="Logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-bold uppercase text-orange-500 xl:text-xl"
                                    : "font-bold uppercase text-white xl:text-xl "
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/favoritos"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-bold uppercase text-orange-500 xl:text-xl "
                                    : "font-bold uppercase text-white xl:text-xl "
                            }
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form 
                        className="md:w-1/2 xl:w-1/3 bg-orange-400 p-10 my-32 rounded-lg space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-4">
                            <label 
                                className="block text-white text-lg uppercase font-extrabold" htmlFor="category">
                                    Categoría
                            </label>
                            <select
                                className="w-full p-3 rounded-lg focus:outline-none"
                                name="category" 
                                id="category"
                                value={searchFilter}
                                onChange={handleChange}
                            >
                                <option value="">-- Seleccione --</option>
                                {categories.drinks.map((category, index) => (
                                    <option key={index} value={category.strCategory}>
                                        {category.strCategory}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold uppercase w-full p-2 rounded-lg transition duration-300" value="Buscar Recetas"/>
                    </form>
                )}
            </div>
        </header>
    );
}
