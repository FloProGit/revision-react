import style from "./Recipe.module.scss"
import {useContext} from "react";
import {ApiContext} from "../../../../context/ApiContext.jsx";
import recipes from "../../../../data/recipes.js";
function Recipe( {recipe:{_id,image,title,liked},toggleRecipeLiked,deleteRecipe}){

    const ApiUrl = useContext(ApiContext)

    async function handleClickLiked(){

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

    async function handleClickDeleteRecipe(e){
        e.stopPropagation();
        try{
            const reponse = await fetch(ApiUrl+'/'+_id,{
                method:'DELETE'
            })
            if (reponse.ok){
                 deleteRecipe(_id);
            }
        }catch(e){
            console.log('error delete'+e.message);
        }
    }

    return <div onClick={handleClickLiked} className={`${style.recipe}`}>
        <div className={`${style.imageContainer}`}>
            <img src={`${(image).includes('http') ? image : 'src/assets/images/' + image}`} alt="recipe"/>
        </div>
        <div className={`d-flex flex-col justify-content-center align-items-center ${style.recipeTitle}`}>
            <h3 className={`mb-10`}>{title}</h3>
            <i className={`fa-solid fa-heart ${liked ? 'text-primary' : ''}`}></i>
        </div>
        <button type="button" onClick={handleClickDeleteRecipe} className={` ${style.recipeDelete}`}><i className={`fa-solid fa-xmark`}></i></button>
    </div>

}

export default Recipe