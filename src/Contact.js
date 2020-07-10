import React from "react";
import "../public/styles.css";
import Details from "./Details";
import Avatar from "./Avatar";
import Name from "./Name";
function Card({ name, id,img, tel, email }) {
  return (
    <div className="card">
      <div className="top">
        <Name name={name} />
        <p> {id}</p>
        <Avatar img={img} />
      </div>
      <div className="bottom">
        <p className="info">{tel}</p>
        <p className="info">{email}</p>
      </div>
    </div>
  );
}
function createcard(details) {
  return (
    <Card
      key={details.id}
      id={details.id}
      name={details.name}
      img={details.img}
      tel={details.tel}
      email={details.email}
    />
  );
}

const Contact = () => {
  return (
    <div>
      {Details.map(Card)}

      {/* <Card
      
        name={Details[0].name}
        img={Details[0].img}
        tel={Details[0].tel}
        email={Details[0].email}
      />
      <Card
        name={Details[1].name}
        img={Details[1].img}
        tel={Details[1].tel}
        email={Details[1].email}
      />
      <Card
        name={Details[2].name}
        img={Details[2].img}
        tel={Details[2].tel}
        email={Details[2].email}
      /> */}
    </div>
  );
};

export default Contact;
