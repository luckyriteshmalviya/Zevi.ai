import { Link } from "react-router-dom";
import Header from "./Header";

function WishList() {
  return (
    <>
      <div>
        {" "}
        <Header />
      </div>
      <Link to={"/"}>
        <button>Go Back to Home</button>;
      </Link>
      <h2>Under construction</h2>
    </>
  );
}

export default WishList;
