import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-6 col-10 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Container;
