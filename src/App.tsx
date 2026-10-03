import Header from "./components/Partials/Header/Header";
import Footer from "./components/Partials/Footer/Footer";
import styles from './App.module.scss';
import {Outlet} from "react-router-dom";
import {type ReactElement, Suspense} from "react";
// import {seedRecipes} from "./data/seed.js";
// seedRecipes();


// AIDE SUR LES TYPE REACT https://github.com/typescript-cheatsheets/react
function App():ReactElement {

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
