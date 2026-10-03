import {NavLink} from "react-router-dom";
import styles from './AdminRecipesNav.module.scss'
import type {ReactElement} from "react";
function AdminRecipesNav():ReactElement{
    return (
        <ul className={`d-flex flex-row ${styles.list}`}>
            <NavLink className={({isActive})=>isActive?styles.active:''} to="list" >Lists des recettes</NavLink>
            <NavLink className={({isActive})=>isActive?styles.active:''} to="new" >ajouter une recette</NavLink>
        </ul>
    )
}

export default AdminRecipesNav;