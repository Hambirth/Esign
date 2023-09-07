import React, { useState } from "react";
import "./App.css";
import Title from "./component/Title";

function App() {
  const [name, setName] = useState("Please Enter the Name");
  const [date, setDate] = useState("DOB");
  return (
    <div className="container-fluid">
      <h1 className="text-center"> Signature App</h1>
      <Title text={date} />
      <Title text={name} />

      <p>
        I am pleased to inform you that the [Document Name] has been prepared
        and is ready for your review and approval. In order to expedite the
        process, we kindly request your signature using our e-signature
        platform. This digital signature will serve as your official endorsement
        of the document. Please click the link below to access the document and
        apply your e-signature at your earliest convenience. Should you have any
        questions or require further assistance, please do not hesitate to
        contact our support team.
      </p>

      <div className="d-flex input-boxes">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
