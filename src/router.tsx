import {createBrowserRouter, type LoaderFunctionArgs, redirect} from "react-router-dom";
import App from "./App";
import {lazy} from  'react'
import {getRecipe} from "./apis/index";
import type {IRecipe} from "./interface";

const Homepage = lazy(()=>import("./pages/Homepage/Homepage"));
const Admin = lazy(()=>import("./pages/Admin/Admin"));
const AdminRecipes = lazy(()=>import("./pages/Admin/pages/adminRecipes/AdminRecipes"));
const AdminRecipesList = lazy(()=>import("./pages/Admin/pages/adminRecipes/pages/AdminRecipesList/AdminRecipeList"));
const AdminRecipesForm = lazy(()=>import("./pages/Admin/pages/adminRecipes/pages/AdminRecipeForm/AdminRecipeForm"));
const AdminUsers = lazy(()=>import("./pages/Admin/pages/adminUsers/AdminUsers"));
export const router =createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                index:true,
                Component:Homepage
            },{
                path:'admin',
                caseSensitive:true,
                Component:Admin,
                children:[
                    {
                        path:'recipes',
                        Component:AdminRecipes,
                        children:[
                            {
                                index:true,
                                loader:async ():Promise<Response>=>redirect('list')
                            },
                            {
                                path:'list',
                                Component:AdminRecipesList
                            },
                            {
                                path:'new',
                                Component:AdminRecipesForm
                            },
                            {
                                path:'edit/:recipeId',
                                loader: async ({params:{recipeId}}:LoaderFunctionArgs):Promise<IRecipe> => getRecipe(String(recipeId)),
                                Component:AdminRecipesForm
                            }
                        ]
                    },
                    {
                        path:'users',
                        Component:AdminUsers
                    },
                    {
                        index:true,
                        loader:async ():Promise<Response>=>redirect('recipes')
                    }
                ]
            }
        ]
    }
])