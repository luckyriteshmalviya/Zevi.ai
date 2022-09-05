import { useState } from "react";
import { useEffect } from "react";
import Search from "../search";

function Fetch() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetails(data);
      });
  }, []);
  // console.log(details);
  return (
    <>
      <div>
        <Search item={details} />
      </div>
      {details.map((elem) => {
        return (
          <>
            <div key={elem.id}>
              {elem.id} title : {elem.title}
            </div>
            <p>{elem.price}</p>
            <p>{elem.description}</p>
            <br />
            <br />
          </>
        );
      })}
    </>
  );
}
export default Fetch;
