import React from "react";
import  "../public/styles.css"
function Card({ name, img, tel, email }) {
  return (
    <div className="card">
      <div className="top">
      <h2 className="name">{name}</h2>
      <img className="circle-img" src={img} alt="" />
      </div>
      <div className="bottom">

      <p className="info">{tel}</p>
      <p className="info">{email}</p>
      </div>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <h1 className="heading">Contact </h1>
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
    </div>
  );
};

export default Contact;
