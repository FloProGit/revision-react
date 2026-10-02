import style from "./Recipe.module.scss"
import {useContext} from "react";
import {ApiContext} from "../../../../context/ApiContext.jsx";
import recipes from "../../../../data/recipes.js";
function Recipe( {recipe:{_id,image,title,liked},toggleRecipeLiked}){

    const ApiUrl = useContext(ApiContext)

    async function handleClick(){

            try{
                const response = await fetch(ApiUrl+'/'+_id,{
                    method : 'PATCH',
                    headers : {
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({liked: !liked})
                });
                if (response.ok){
                    console.log(response.body)
                    const updateRecipe = await response.json()
                    toggleRecipeLiked(updateRecipe)
                }
            }catch (e){
                console.log('switchliked fetch error'+e.message)
            }
    }

    return <div onClick={handleClick} className={`${style.recipe}`}>
        <div className={`${style.imageContainer}`}>
            <img src={`${(image).includes('http')?image:'src/assets/images/'+image}`} alt="recipe"/>
        </div>
        <div className={`d-flex flex-col justify-content-center align-items-center ${style.recipeTitle}`}>
            <h3 className={`mb-10`}>{title}</h3>
            <i className={`fa-solid fa-heart ${liked?'text-primary':''}`}></i>
        </div>
    </div>

}

export default Recipe