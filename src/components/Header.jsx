import styles from  "./Header.module.scss"
import cookchef from    "../assets/images/logo.png"
function Header(){
    return (
        <header className={` d-flex flex-row align-items-center ${styles.header}`}>
            <i className={`fa-solid fa-bars mr-15`}></i>
            <div className={`flex-fill `}>
                <img src={cookchef} alt=""/>
            </div>
            <ul>
                <button className={`mr-5 btn btn-reverse`}><i className="fa-solid fa-basket-shopping mr-5"></i><span>panier</span></button>
                <button className={`btn btn-primary`}>connexion</button>
            </ul>
        </header>
    );
}

export default Header;