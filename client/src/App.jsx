// imports
import { Outlet } from "react-router-dom";
import "./main.css";
import backgroundVideo from "./assets/backgroundVideo.mp4";
import axios from "axios";
import { UserProvider } from "../utils/userContext";
import { Toaster } from "react-hot-toast";

// configure axios defaults for all requests
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#2196f3",
            color: "#fff",
          },
        }}
      />
      <div className="videoContainer">
        <video className="backgroundVideo" loop autoPlay muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <main>
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
