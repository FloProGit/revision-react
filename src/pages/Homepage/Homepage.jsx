import styles from "./Homepage.module.scss"
import SearchBar from "./Components/searchBar/SearchBar.jsx";
import {useContext, useEffect, useState} from "react";
import Loading from "../../components/Loading/Loading.jsx";
import Recipe from "./Components/Recipe/Recipe.jsx";
import {ApiContext} from "../../context/ApiContext.jsx";
import {useFetchData} from "../../hooks/useFetchData.jsx";
function Homepage(){
    const [filter,setFilter] = useState('');
    const [page,setPage] = useState(1);
    const Apiurl = useContext(ApiContext);
    const [[recipes,setRecipes],isLoading] = useFetchData(Apiurl,page)

    console.log(recipes)
    function updateRecipe(updatedRecipe){
        setRecipes(recipes.map((r)=>r._id === updatedRecipe._id ? updatedRecipe : r ))
    }

    function deleteRecipe(_id){

        setRecipes(recipes.filter(r=>r._id !== _id));

    }
    return <div className={` flex-fill d-flex flex-col container p-20`}>
        <h1 className={`mb-20 my-30`}>
            Découvrez nos nouvelles recettes
        </h1>
        <SearchBar setFilter={setFilter}/>
        <div className={`card d-flex p-20 flex-fill justify-content-center align-items-center ${styles.contentCard} br`}>
        {isLoading && !recipes.length  ? (<Loading/>) : (
            <div className={`d-flex flex-col`}>
            <div className={styles.grid}>
                    { recipes.filter((r)=> r?.title?.toLowerCase().includes(filter?.toLowerCase())).map((recipe)=> (<Recipe key={recipe._id} recipe={recipe} toggleRecipeLiked={updateRecipe} deleteRecipe={deleteRecipe}/>))}
            </div>
                <div className={`d-flex justify-content-center align-items-center m-10`}>
                     <button className={`btn btn-primary`} onClick={()=>setPage(page+1)}>voir plus</button>
                </div>
            </div>
        )}
        </div>

    </div>
}

export default Homepage;