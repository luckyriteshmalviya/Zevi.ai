import { useState } from "react";
import "./App.css";
import Fetch from "./components/Fetch";
import BackgroundImage from "./assets/BackgroundImage.jpg";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="mainContainer">
      <div>
        <img
          className="background"
          src={BackgroundImage}
          alt="backgroundImage"
        />
      </div>
      <div className="searchSection">
        <input
          className="SearchBar"
          type="text"
          placeholder="Search here.."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {search}
    </div>
  );
}

export default App;
