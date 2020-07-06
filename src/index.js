import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card
      name="beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="1234556"
      email="beyonce@email.com"
    />
    <Card
      name="Jack bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="63789837"
      email="beauer@gamil.com"
    />
    <Card
name="Chuck norries"
img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
tel="83745790"
email="chuck@email.com"
/>
    
  </div>,
  document.getElementById("root")
);
