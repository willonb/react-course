import "./App.css";
import NavBar from "./hooks/components/Navbar"
import { Route, Routes} from "react-router-dom"
import Page1 from "./styles/tailwindcss/Paginas/Pagina1";
import Getcep from "./api/Request";





function App() {
  return (
    <body>
      <Routes>
        <Route path="/" Component={Getcep} />
        <Route path="/navbar"   Component={NavBar} />
        <Route path="/Page1" Component={Page1} />
      </Routes>
     
    </body>
  );
}

export default App;
