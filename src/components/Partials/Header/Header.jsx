import styles from "./Header.module.scss"
import cookchef from "../../../assets/images/logo.png"
import {useState} from "react";
import HeaderMenu from "./HeaderMenu.jsx";
import {NavLink} from "react-router-dom";
function Header(){

    const [burgerOpen,setBurgerOpen] = useState(false);


    function handleSwitchBurger( ){
        setBurgerOpen(!burgerOpen)
    }
    return (
        <header className={` d-flex flex-row align-items-center ${styles.header}`}>
            <div className={`flex-fill `}>
                <NavLink to="/">
                <img src={cookchef} alt=""/>
                </NavLink>
            </div>
            <ul className={`${styles.headerList}`}>
                <NavLink to="/admin">
                    <button  className={`mr-5 btn btn-reverse`}><span>Admin</span></button>
                </NavLink>
                <button className={`mr-5 btn btn-reverse`}><i className="fa-solid fa-heart mr-5"></i><span>Whish list</span></button>
                <button className={`btn btn-primary`}>connexion</button>
            </ul>
            <i onClick={handleSwitchBurger} className={`${styles.headerXs} fa-solid fa-bars mr-15`}></i>

            {burgerOpen && <>
                <div onClick={handleSwitchBurger} className={`calc `}/>
                <HeaderMenu />
            </>}

        </header>
    );
}

export default Header;