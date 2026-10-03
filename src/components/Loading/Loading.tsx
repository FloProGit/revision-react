import styles from './Loading.module.scss'
import type {ReactElement} from "react";
function Loading():ReactElement{
    return <div className={`d-flex flex-row align-items-center justify-content-center flex-fill`}>
        <i className={`fa-solid fa-spinner ${styles.spinner}`}></i>
    </div>
}
export default Loading;