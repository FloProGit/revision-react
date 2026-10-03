import styles from  './AdminNav.module.scss'
import {NavLink} from "react-router-dom";
function AdminNav(){
    return (
        <ul className={`d-flex flex-col card ${styles.list}`}>
            <NavLink className={({isActive})=>isActive ?styles.active:""} to="recipes">Recettes</NavLink>
            <NavLink className={({isActive})=>isActive ?styles.active:""} to="users">Users</NavLink>
        </ul>
    )
}

export default AdminNav;