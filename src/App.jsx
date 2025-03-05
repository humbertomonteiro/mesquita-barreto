import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import Footer from "./components/templates/Footer";
import ButtonWhatsapp from "./components/shared/ButtonWhatsapp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <RoutesApp />
      </Main>
      <Footer />
      <ButtonWhatsapp />
    </BrowserRouter>
  );
}

export default App;
