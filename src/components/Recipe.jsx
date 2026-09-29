import style from "./Recipe.module.scss"
import recipe from "../assets/images/recette.jpg"
function Recipe(){

    return <div className={`${style.recipe}`}>
        <div className={`${style.imageContainer}`}>
            <img src={recipe} alt="recipe"/>
        </div>
        <div className={`d-flex flex-row justify-content-center align-items-center ${style.recipeTitle}`}>
            <h3>Plat bizzare</h3>

            
        </div>
    </div>

}

export default Recipe