import styles from './SearchBar.module.scss'
import {type ReactElement, useState} from "react";
import * as React from "react";

type SearchBarProps = {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({setFilter}:SearchBarProps):ReactElement{
    const [focus,setFocus] = useState(false);


    function handleFocus():void{
        setFocus(true)
    }
    function handleBlur():void{
        setFocus(false)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>):void{
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