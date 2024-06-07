import "./App.css";
import Drop from "./hooks/components/Drop";

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
    <Drop pages={pages} />
  
    </body>
  );
}

export default App;
