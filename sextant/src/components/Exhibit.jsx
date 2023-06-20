import React from "react";

function Exhibit(props) {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__apply" style={{ color: "blue" }}>
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exhibit;
