import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeServices"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice: StateCreator<RecipeSliceType>  = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories });
    },
    searchRecipes: async (filter) => {
        const drinks = await getRecipes(filter);
        set({ drinks });
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id);
        set({ 
            selectedRecipe,
            modal: true
         });
    },
    closeModal: () => {
        set({
            modal: false
        })
    }
})