import "./App.css";
import Drop from "./hooks/components/Drop";
import Navbar from "./hooks/components/NavBar";

function App() {

  const pages =  [
    {
        title: "Page one",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },
    {
        title: "Page one",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },
    {
        title: "Page one",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },
    {
        title: "Page one",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },
  ]

  
  return (
    <body>
      <Navbar />
   
  
    </body>
  );
}

export default App;
