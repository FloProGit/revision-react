import Header from "./components/Partials/Header/Header.jsx";
import Footer from "./components/Partials/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import styles from './App.module.scss';
import {useState} from "react";
import Admin from "./pages/Admin/Admin.jsx";
// import {seedRecipes} from "./data/seed.js";
// seedRecipes();
function App() {
    const [page,setPage]=useState('homepage');
  return (
   <div className={`d-flex flex-col ${styles.appContainer}`}>
       <Header setPage={setPage}></Header>

       {(page==='homepage'||page==='')&& <Homepage></Homepage>}
       {(page==='admin')&& <Admin></Admin>}
       <Footer></Footer>
   </div>
  )
}

export default App
