import Header from "./components/Partials/Header/Header.jsx";
import Footer from "./components/Partials/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import styles from './App.module.scss';
// import {seedRecipes} from "./data/seed.js";
// seedRecipes();
function App() {

  return (
   <div className={`d-flex flex-col ${styles.appContainer}`}>
       <Header></Header>
       <Homepage></Homepage>
       <Footer></Footer>
   </div>
  )
}

export default App
