import React, { useState } from "react";
import Contact from "./Contact";
import Avatar from "./Avatar";
import Details from "./Details";
import Name from "./Name";

const App = () => {
 
  return (
    <div>
      <h1 className="heading">Contact </h1>
    
      <Avatar img={Details[0].img} />

      <Contact />
    </div>
  );
};

export default App;
