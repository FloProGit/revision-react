import Header from "./components/Partials/Header/Header.jsx";
import Footer from "./components/Partials/Footer/Footer.jsx";
import styles from './App.module.scss';
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import {getRecipe} from "./apis/index.jsx";
// import {seedRecipes} from "./data/seed.js";
// seedRecipes();
function App() {

  return (
   <div className={`d-flex flex-col ${styles.appContainer}`}>
       <Header></Header>
       <div className={`d-flex flex-fill`}>
       <Suspense>
           <Outlet></Outlet>
       </Suspense>
       </div>
       <Footer></Footer>
   </div>
  )
}

export default App
