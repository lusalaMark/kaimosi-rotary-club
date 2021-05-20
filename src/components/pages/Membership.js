import React, { useState } from "react";
import "./Membership.css";
import { db } from "../../firebase";

const Membership = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("membership")
      .add({
        name: name,
        email: email,
        phonenumber: phonenumber,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="memnership">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Membership</h1>

        <label>Enter your Full Name</label>
        <input
          placeholder="Enter your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>"Enter your Email Address </label>
        <input
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Enter Phone Number</label>
        <input
          type="number"
          placeholder="+254123456789"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />

        <label>Enter Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "lightgreen" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Membership;
