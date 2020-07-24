import React from "react";

function Output(props) {
  const item = props.list;
  const listitem = item.map((item) => {
    return (
      <li
        className=" mt-1"
        style={{
          listStyle: "none",
          backgroundColor: "#40ff00",
          color: "white",
          fontSize: "20px",
          height: "50px",
          margin: "auto",
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="container">
      <h1>{listitem}</h1>
    </div>
  );
}
export default Output;
