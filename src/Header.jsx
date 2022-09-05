import { useState } from "react";
import "./Header.css";
function Header(props) {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="header">
        <div className="searchBar">
          <input
            className="searchInput"
            placeholder="Search Here.."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div>
            <i className="bx bx-search"></i>
          </div>
        </div>
        <div className="logo">z e v i</div>
      </div>
    </>
  );
}

export default Header;
