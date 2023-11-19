import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Container;
