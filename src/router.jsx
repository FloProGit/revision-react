import {createBrowserRouter, redirect} from "react-router-dom";
import App from "./App.jsx";
import {lazy} from  'react'
import {getRecipe} from "./apis/index.jsx";

const Homepage = lazy(()=>import("./pages/Homepage/Homepage.jsx"));
const Admin = lazy(()=>import("./pages/Admin/Admin.jsx"));
const AdminRecipes = lazy(()=>import("./pages/Admin/pages/adminRecipes/AdminRecipes.jsx"));
const AdminRecipesList = lazy(()=>import("./pages/Admin/pages/adminRecipes/pages/AdminRecipesList/AdminRecipeList.jsx"));
const AdminRecipesForm = lazy(()=>import("./pages/Admin/pages/adminRecipes/pages/AdminRecipeForm/AdminRecipeForm.jsx"));
const AdminUsers = lazy(()=>import("./pages/Admin/pages/adminUsers/AdminUsers.jsx"));
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
                                loader:async ()=>redirect('list')
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
                                loader: async ({params:{recipeId}}) => getRecipe(recipeId),
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
                        loader:async ()=>redirect('recipes')
                    }
                ]
            }
        ]
    }
])