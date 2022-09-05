import "./SecondPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Filter from "./FilterSection";

function SecondPage() {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((item) => setDetails(item));
  }, []);
  //   console.log(details);

  useEffect(() => {
    let res = details.filter((val) => {
      return val.title.toLowerCase().match(search.toLowerCase());
    });
    setDetails(res);
  }, [search]);

  return (
    <>
      <Header />
      <div className="secondPage">
        <Filter />
        <div className="ProductSection">
          {details.map((elem) => {
            return (
              <div className="product" key={elem.id}>
                <img
                  style={{ width: "220px", height: "200px" }}
                  src={elem.image}
                />
                <div
                  style={{ position: "absolute", top: "5px", right: "5px" }}
                  onClick={(e) => {
                    e.target.style.color = "red";
                  }}
                >
                  <i className="bx bx-heart"></i>
                </div>
                <div className="productDetails">
                  <div>{elem.title}</div>
                  <div>{elem.price}</div>
                </div>
                <div className="viewProduct">View Product</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SecondPage;
