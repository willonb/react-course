import "./App.css";
import NavBar from "./hooks/components/Navbar"
import { Route, Routes} from "react-router-dom"
import Team from "./components/Team"


function Home() {
  return (
  <NavBar/>

  
  )
}

function App() {
  return (
    <body>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/teams" Component={Team} />
      </Routes>
     
    </body>
  );
}

export default App;
