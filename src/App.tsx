import BackgroundElements from "./components/BackgroundElements/BackgroundElements";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.scss";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <BackgroundElements />
        <MainPage />
        <Footer />
      </div>
    </>
  );
};

export default App;
