import "./App.css";
import NavBar from "./hooks/components/Navbar"
import { Route, Routes} from "react-router-dom"
import Team from "./components/Team"
import Home from "./styles/tailwindcss/Home";
import Page1 from "./styles/tailwindcss/Paginas/Pagina1";



function App() {
  return (
    <body>
      <Routes>
        <Route path="/" Component={NavBar} />
        <Route path="/Page1" Component={Page1} />
      </Routes>
     
    </body>
  );
}

export default App;
