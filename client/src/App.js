import "../src/css/App.css";
import HomePage from "./components/HomePage";
import MeetPage from "./components/MeetPage";
// import VideoStreams from "./utility/VideoStreams";
import Test from "./components/Test";
import { Routes, Route } from "react-router-dom";
//import { v4 as uuidv4 } from "uuid";
import Login from "./components/Login";
import VideoTest from "./components/VideoTest";
import io from "socket.io-client";
import Peer from "peerjs";
import Git from "./components/Git";

export const meetSocket = io.connect("http://localhost:5000", {
  reconnectionDelayMax: 10000,
});

// export const peer = new Peer(undefined, {
//   path: "/peerjs",
//   host: "/",
//   port: "5000",
// });
//const id = uuidv4();
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/meet" element={<MeetPage />}></Route>
        <Route exact path="/test" element={<Test />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/p/t" element={<VideoTest />}></Route>
        <Route exact path="/p/k" element={<Git />}></Route>
        {/* <Route
          exact
          path="/meet/p/:roomToJoin"
          element={<VideoStreams roomId={id} />}
        ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
