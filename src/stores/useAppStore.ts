import { create } from "zustand"
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice"
import { devtools } from "zustand/middleware"
import { createFavoritesSlice, favoritesSliceType } from "./favoritesSlice"

export const useAppStore = create<RecipeSliceType & favoritesSliceType>()(
    devtools (
        (...a) => ({
            ...createRecipeSlice(...a),
            ...createFavoritesSlice(...a)
        })
    )
)