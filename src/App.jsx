// imports
import { Outlet } from "react-router-dom";
import "./main.css";
import backgroundVideo from "../src/assets/backgroundVideo.mp4";

function App() {
  return (
    <div className="videoContainer">
      <video className="backgroundVideo" loop autoPlay muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
