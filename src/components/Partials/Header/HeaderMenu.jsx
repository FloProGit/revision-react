import styles from './HeaderMenu.module.scss';

function headerMenu() {


    return (
        <ul className={`${styles.MenuContainer} card`}>
            <button className={`mr-5 btn btn-reverse`}><i className="fa-solid fa-heart mr-5"></i><span>Whish list</span></button>
            <button className={`btn btn-primary`}>connexion</button>
        </ul>
    )



}

export default headerMenu;