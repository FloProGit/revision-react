import styles from './AdminRecipeForm.module.scss'
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createRecipe, updateRecipe} from "../../../../../../apis/index.jsx";
import {redirect, useLoaderData, useNavigate} from "react-router-dom";
function AdminRecipeForm(){
    'use no memo';///utile maintenant car le reset() ne ce fait que en interne et ne vide pas les champs

    const recipe = useLoaderData();
    const navigate = useNavigate();
    console.log('recipe',recipe)
    const defaultValues = {
        title :recipe ? recipe.title : '',
        image:recipe ? recipe.image : ''
    }

    const recipeSchema = yup.object({
        title: yup.string()
            .required('le champ titre de la recette doit être renseigné')
            .min(10,'le titre doit être explicite ')
            .max(30,'le titre doit être succinct'),
        image:yup.string()
            .required('il faut une reseigné une image')
            .url("l'image dois être un lien valide"),
    })


    const { formState:{errors,isSubmitting}
        ,register,
        handleSubmit,
        reset,
        clearErrors,
        setError
    } =useForm({
        defaultValues,
        resolver:yupResolver(recipeSchema)
    })

    async function submit(values){
        try{
            clearErrors();
            if (recipe){
                const updatedRecipe = await updateRecipe({...values,_id:recipe._id})
                // reset({
                //     title:updatedRecipe.title,
                //     image:updatedRecipe.image
                // });
                navigate('../list')
            }else {
                await createRecipe(values);
            }
            reset(defaultValues);
        }catch (e){
            console.log('error form '+e.message)
        }
    }


    return (
        <form onSubmit={handleSubmit(submit)} className={`d-flex flex-col card p-20 ${styles.recipeForm}`}>
            <h2 className={`mb-20`}>Ajouter une recette</h2>

            <div className={`d-flex flex-col mb-20`}>
                <label  htmlFor="">Titre de la recette</label>
                <input {...register('title')} type="text"/>
                {errors.title && <p className="form-error">{errors.title.message}</p>}
            </div>
            <div className={`d-flex flex-col mb-20`}>
                <label   htmlFor="">Image pour la recette</label>
                <input {...register('image')} type="text"/>
                {errors.image && <p className="form-error">{errors.image.message}</p>}

            </div>
            {errors.generic && <p className="form-error">{errors.generic.message}</p>}
            <div>
                <button disabled={isSubmitting} className={`btn btn-primary`}> Sauvegarder</button>
            </div>
        </form>
    )
}

export default AdminRecipeForm;