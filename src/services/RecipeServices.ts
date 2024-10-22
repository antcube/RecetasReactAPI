import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema } from "../schemas/recipes-schema";
import { SearchFilter } from "../types";

export const getCategories = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const { data } = await axios.get(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);
    if(result.success) {
        return result.data;
    }
}

export const getRecipes = async (filter: SearchFilter) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`;
    const { data } = await axios.get(url);
    const result = DrinksAPIResponseSchema.safeParse(data);
    if(result.success) {
        return result.data;
    }
}