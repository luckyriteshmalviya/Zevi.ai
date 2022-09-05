import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import background from "./assets/background.jpg";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mainContainer">
        <img className="background" src={background} alt="BackgroundImage" />
        <div className="logo">z e v i</div>
        <div className="frontData">
          <div className="searchBar">
            <div>
              <input
                className="searchInput"
                type="text"
                value={search}
                placeholder="Search Here.."
                onClick={() => {
                  document.getElementById("suggestionBox").style.display =
                    "block";
                }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div>
              <Link to={"/Product-List"}>
                <i className="bx bx-search"></i>
              </Link>
            </div>
          </div>
          <div id="suggestionBox">
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
