import style from "./Recipe.module.scss"
import {useContext} from "react";
import {ApiContext} from "../../../../context/ApiContext.jsx";
import recipes from "../../../../data/recipes.js";
function Recipe( {recipe,updateRecipe,deleteRecipe}){
    function handleClicklickedRecipe(){
        updateRecipe(
            {...recipe,
                liked:!recipe.liked
            }
        )
    }
    async function handleClickDeleteRecipe(e){
        e.stopPropagation();
        deleteRecipe(recipe._id);
    }

    return <div onClick={handleClicklickedRecipe} className={`${style.recipe}`}>
        <div className={`${style.imageContainer}`}>
            <img src={`${(recipe.image).includes('http') ? recipe.image : 'src/assets/images/' + recipe.image}`} alt="recipe"/>
        </div>
        <div className={`d-flex flex-col justify-content-center align-items-center ${style.recipeTitle}`}>
            <h3 className={`mb-10`}>{recipe.title}</h3>
            <i className={`fa-solid fa-heart ${recipe.liked ? 'text-primary' : ''}`}></i>
        </div>
        <button type="button" onClick={handleClickDeleteRecipe} className={` ${style.recipeDelete}`}><i className={`fa-solid fa-xmark`}></i></button>
    </div>

}

export default Recipe