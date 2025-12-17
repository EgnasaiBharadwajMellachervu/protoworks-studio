import { useState } from "react";
import Simulator from "./Simulator";

export default function App() {
  const [page, setPage] = useState("home");

  return page === "home" ? (
    <div className="home">
      <h1>ProtoWorks Studio</h1>
      <p>Virtual Prototyping for Core Engineers</p>
      <button onClick={() => setPage("simulator")}>
        Launch Simulator
      </button>
    </div>
  ) : (
    <Simulator goHome={() => setPage("home")} />
  );
}
