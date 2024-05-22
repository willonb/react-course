import "./App.css";

import Content from "./components/Team/components/content";
import Section from "./components/Team/components/section";
import Main from "./components/Team/components/main"

function App() {
  return (
    <body>
      
      <div>
        <Section />
      </div>

      <div className="container-content">
        <Content />
        <Content />
        <Content />
      </div>
      
      <div className="container-content2">
        <Content />
        <Content />
        <Content />
      </div>

      <div>
        <Main />
      </div>

    </body>
  );
}

export default App;
