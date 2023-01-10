import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      mob={contact.mob}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <Avatar imgURL="/images/logo.png" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
