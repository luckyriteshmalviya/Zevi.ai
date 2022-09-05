import { Link } from "react-router-dom";
import "./FilterSection.css";

function Filter() {
  return (
    <>
      <div className="filterSection">
        <div>
          <Link to={"/"}>
            <button className="button">Go Back to Home</button>
          </Link>
        </div>
        <div
          style={{
            borderBottom: "1px solid lightgray",
            margin: "0 2em",
            paddingBottom: "0.6em",
          }}
        >
          <h3>Brand</h3>
          <input type="checkbox" /> Levis
          <br />
          <input type="checkbox" /> Gucci
        </div>
        <div
          style={{
            borderBottom: "1px solid lightgray",
            margin: "0 2em",
            paddingBottom: "0.6em",
          }}
        >
          <h3>Price Ranges</h3>
          <input type="checkbox" /> Under 500
          <br />
          <input type="checkbox" /> 1000 To 3000
        </div>
        <div
          style={{
            borderBottom: "1px solid lightgray",
            margin: "0 2em",
            paddingBottom: "0.6em",
          }}
        >
          <h3>Ratings</h3>
          <input type="checkbox" /> &#9733; &#9733; &#9733; &#9733; &#9733;
          <br />
          <input type="checkbox" /> &#9733; &#9733; &#9733; &#9733; &#9734;
          <br />
          <input type="checkbox" /> &#9733; &#9733; &#9733; &#9734; &#9734;
          <br />
          <input type="checkbox" /> &#9733; &#9733; &#9734; &#9734; &#9734;
          <br />
          <input type="checkbox" /> &#9733; &#9734; &#9734; &#9734; &#9734;
        </div>
        <br />
        <div>
          <Link to={"/wishList"}>
            <button className="button">Order</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Filter;
