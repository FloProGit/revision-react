import {NavLink} from "react-router-dom";
import styles from './AdminRecipesNav.module.scss'
function AdminRecipesNav(){
    return (
        <ul className={`d-flex flex-row ${styles.list}`}>
            <NavLink className={({isActive})=>isActive?styles.active:''} to="list" >Lists des recettes</NavLink>
            <NavLink className={({isActive})=>isActive?styles.active:''} to="new" >ajouter une recette</NavLink>
        </ul>
    )
}

export default AdminRecipesNav;