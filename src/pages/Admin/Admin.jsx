import {Outlet} from "react-router-dom";
import AdminNav from "./components/AdminNav/AdminNav.jsx";
import {Suspense} from "react";

function Admin(){

    return <div className={`d-flex  flex-fill  p-20`}>
        <AdminNav></AdminNav>
        <div className={`d-flex flex-col flex-fill m-20`}>
            <Suspense>
                <Outlet></Outlet>
            </Suspense>
        </div>

    </div>

}


export default Admin;