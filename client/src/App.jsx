// imports
import { Outlet } from "react-router-dom";
import "./main.css";
import backgroundVideo from "./assets/backgroundVideo.mp4";
import axios from "axios";

// configure axios defaults for all requests
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

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
