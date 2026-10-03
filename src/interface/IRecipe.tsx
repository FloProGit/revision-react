export interface IRecipe{
    _id?:string,
    title:string,
    image:string,
    liked?:boolean
}
export type RecipeFormValues = Omit<IRecipe, '_id'>;