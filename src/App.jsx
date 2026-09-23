import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";
import styles from './App.module.scss';
function App() {

  return (
   <div className={`d-flex flex-col ${styles.appContainer}`}>
       <Header></Header>
       <Content></Content>
       <Footer></Footer>
   </div>
  )
}

export default App
