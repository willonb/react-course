import "./App.css";
import Titulo from "./styles/css-modules/components/titulos"
import Headline from "./styles/css-modules/components/Headline";

function App() {
  return (
    <body>
    <Titulo />
    <Headline />
    <h1 className="titulo">global</h1>
    </body>
  );
}

export default App;
