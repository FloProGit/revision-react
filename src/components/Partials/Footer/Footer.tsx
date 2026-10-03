import styles from "./Footer.module.scss"
import type {ReactElement} from "react";
function Footer():ReactElement{
    return <div className={`d-flex align-items-center justify-content-center p-20 ${styles.footer}`}>Copyright © flocookchef, Inc</div>
}

export default Footer;