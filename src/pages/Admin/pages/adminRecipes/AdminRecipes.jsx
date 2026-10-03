import {Outlet} from "react-router-dom";
import AdminRecipesNav from "./components/adminRecipesNav/AdminRecipesNav.jsx";
import {Suspense} from "react";

function AdminRecipes(){
    return (
        <div className={`d-flex flex-col flex-fill`}>
            <h4 className={`mb-20`}>Gestion des recettes</h4>
            <div className={` flex-fill d-flex flex-col`}>
                <AdminRecipesNav/>
                <div className={` flex-fill d-flex flex-col `}>
                    <Suspense>
                        <Outlet/>
                    </Suspense>
                </div>
            </div>
        </div>

    )
}

export default AdminRecipes;