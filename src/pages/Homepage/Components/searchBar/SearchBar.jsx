import styles from './SearchBar.module.scss'
import {useState} from "react";
function SearchBar({setFilter}){
    const [focus,setFocus] = useState(false);


    function handleFocus(){
        setFocus(true)
    }
    function handleBlur(){
        setFocus(false)
    }

    function handleChange(e){
        setFilter(e.target.value)
    }

    return (
        <div className={`card p-10 d-flex align-items-center justify-content-center ${styles.searchContainer} ${focus && styles.active}`}>
            <i className={`fa-solid fa-magnifying-glass pr-5`}></i>
            <input onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} type="text" className={`${styles.inputSearch}`} placeholder="rechercher"/>
        </div>
    )
}

export default SearchBar;