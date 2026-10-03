import {useFetchRecipes} from "../../../../../../hooks/useFetchRecipes";
import styles from './AdminRecipeList.module.scss'
import {deleteRecipe} from "../../../../../../apis";
import {NavLink} from "react-router-dom";
import type {ReactElement} from "react";
import type {IRecipe} from "../../../../../../interface";
function AdminRecipeList():ReactElement{

    const [[recipes,setRecipes]] = useFetchRecipes()


    function handleDeleteRecipe(_id:string):void{
        deleteRecipe(_id);
        setRecipes(recipes.filter((r:IRecipe)=>r._id!==_id));
    }


    return (
        <ul className={`${styles.list}`}>
        {recipes && recipes.map((recipe:IRecipe)=>(
            <li  key={recipe._id} className={`d-flex flex-row `}>
                <span className={`flex-fill`}>{recipe.title}</span>
                <NavLink to={'../edit/'+recipe._id} className={`btn btn-primary mr-15`}>Editer</NavLink>
                <button onClick={()=>handleDeleteRecipe(recipe._id!)} className={`btn btn-danger`}>Supprimer</button>
            </li>
        ))}
        </ul>
    )
}

export default AdminRecipeList;