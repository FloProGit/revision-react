import styles from './HeaderMenu.module.scss';
import {NavLink} from "react-router-dom";
import type {ReactElement} from "react";

function headerMenu():ReactElement {


    return (
        <ul className={`${styles.MenuContainer} card`}>
            <NavLink to="/admin">
                <button  className={`mr-5 btn btn-reverse`}><span>Ajouter une recette</span></button>
            </NavLink>
            <button className={`mr-5 btn btn-reverse`}><i className="fa-solid fa-heart mr-5"></i><span>Whish list</span></button>
            <button className={`btn btn-primary`}>connexion</button>
        </ul>
    )



}

export default headerMenu;