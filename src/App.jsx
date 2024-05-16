import "./App.css";

import Baneer from "./components/Banner"

import Vintage from "./assets/images/svg/anime-away-face-svgrepo-com.svg"
import Camera from "./assets/images/svg/camera-film-strip-svgrepo-com.svg"
import Gamepad from "./assets/images/svg/vintage-gamepad-svgrepo-com.svg"
import Hourglass from "./assets/images/svg/vintage-hourglass-svgrepo-com.svg"
import Controller from "./assets/images/svg/vintage-joystick-controller-gaming-videogames-svgrepo-com.svg"
import Light from "./assets/images/svg/vintage-light-bulb-svgrepo-com.svg"


function App() {
  return (
    <body>

      <div className="card">
        <h1>React Course</h1>
        <p>Front-end Javascript</p>
      </div>

      <Baneer title="titulo" description="descrição" image={Vintage} />
      <Baneer title="titulo" description="descrição" image={Camera} />
      <Baneer title="titulo" description="descrição" image={Gamepad} />
      <Baneer title="titulo" description="descrição" image={Hourglass} />
      <Baneer title="titulo" description="descrição" image={Controller} />
      <Baneer title="titulo" description="descrição" image={Light} />

    </body>
  );
}

export default App;
