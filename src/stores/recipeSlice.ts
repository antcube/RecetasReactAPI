import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
import { Categories, Drinks, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
}

export const createRecipeSlice: StateCreator<RecipeSliceType>  = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories });
    },
    searchRecipes: async (filter) => {
        const drinks = await getRecipes(filter);
        set({ drinks });
    }
})