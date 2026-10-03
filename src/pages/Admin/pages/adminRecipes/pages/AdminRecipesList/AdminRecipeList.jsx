import {useFetchRecipes} from "../../../../../../hooks/useFetchRecipes.jsx";
import styles from './AdminRecipeList.module.scss'
import {deleteRecipe} from "../../../../../../apis/index.jsx";
import {NavLink, redirect} from "react-router-dom";
function AdminRecipeList(){

    const [[recipes,setRecipes]] = useFetchRecipes()


    function handleDeleteRecipe(_id){
        deleteRecipe(_id);
        setRecipes(recipes.filter((r)=>r._id!==_id));
    }


    return (
        <ul className={`${styles.list}`}>
        {recipes && recipes.map((recipe)=>(
            <li  key={recipe._id} className={`d-flex flex-row `}>
                <span className={`flex-fill`}>{recipe.title}</span>
                <NavLink to={'../edit/'+recipe._id} className={`btn btn-primary mr-15`}>Editer</NavLink>
                <button onClick={()=>handleDeleteRecipe(recipe._id)} className={`btn btn-danger`}>Supprimer</button>
            </li>
        ))}
        </ul>
    )
}

export default AdminRecipeList;