
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar/>
      <AppRouter />
      <Footer/>
    </>
  );
}

export default App;
