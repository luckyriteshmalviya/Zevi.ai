import { useEffect, useState } from "react";

function Search({ item }) {
  const [search, setsearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { title, description } = item;
  console.log("item ", item[4].title);
  useEffect(() => {
    let res = item.filter((val) => {
      return val.title.toLowerCase().match(search.toLowerCase());
    });
    setSearchList(res);
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />

      <div>
        Searched Result
        {searchList.map((elem) => {
          return (
            <div className="container">
              <p key={elem.id}>
                <b> Name : </b>
                {elem.name}
              </p>
              <p>Username : {elem.username}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
