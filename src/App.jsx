import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routesApp";
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import Footer from "./components/templates/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <RoutesApp />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
