import styles from "./Header.module.scss"
import cookchef from "../../../assets/images/logo.png"
import {useState} from "react";
import HeaderMenu from "./HeaderMenu.jsx";
function Header({setPage}){

    const [burgerOpen,setBurgerOpen] = useState(false);


    function handleSwitchBurger( ){
        setBurgerOpen(!burgerOpen)
    }
    return (
        <header className={` d-flex flex-row align-items-center ${styles.header}`}>
            <div className={`flex-fill `}>
                <img src={cookchef} alt=""/>
            </div>
            <ul className={`${styles.headerList}`}>
                <button onClick={()=>setPage("admin")} className={`mr-5 btn btn-reverse`}><span>Ajouter une recette</span></button>
                <button className={`mr-5 btn btn-reverse`}><i className="fa-solid fa-heart mr-5"></i><span>Whish list</span></button>
                <button className={`btn btn-primary`}>connexion</button>
            </ul>
            <i onClick={handleSwitchBurger} className={`${styles.headerXs} fa-solid fa-bars mr-15`}></i>

            {burgerOpen && <>
                <div onClick={handleSwitchBurger} className={`calc `}/>
                <HeaderMenu setPage={setPage}/>
            </>}

        </header>
    );
}

export default Header;