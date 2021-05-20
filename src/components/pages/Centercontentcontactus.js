<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 75092581f78fb7497b59c077c01af56b71ff23f5
// import React from "react";
// import "./Centercontentcontactus.css";
// import Socialmedia from "./Socialmedia";
// import { Link } from "react-router-dom";
// import image1 from "./countryside.jpg";

// function Centercontentcontactus() {
//   return (
//     <div className="contact__center">
//       <div className="contact__feed">
//         <p>
//           If you have any questions or comments, please let us know. We look
//           forward to hearing from you.
//         </p>
//       </div>
//       <div className="contact__people">
//         <div className="contact__pic">
//           <img src={image1} alt="" />
//         </div>
//         <div className="contact__imgtext">
//           President
//           <br />
//           Peter Roaf
//           <br />
//           proaf@shaw.ca
//           <br />
//           604-839-1465
//         </div>
//       </div>
//       <div className="contact__people">
//         <div className="contact__pic">
//           <img src={image1} alt="" />
//         </div>
//         <div className="contact__imgtext">
//           Membership Chair
//           <br />
//           Lynn Cameron
//           <br />
//           lynncameron@dccnet.com
//           <br />
//           604-839-1465
//         </div>
//       </div>
//       <div className="contact__people">
//         <div className="contact__pic"></div>
//         <div className="contact__text">
//           <p>Club Mailing address</p>
//           Rotary Club of Ladner
//           <br />
//           PO Box 77
//           <br />
//           Delta BC V4K 3N5
//         </div>
//       </div>
//       <div className="contact__people">
//         <div className="contact__pic"></div>
//         <div className="contact__text">
//           <p>Meeting Location</p>
//           <br />
//           Tuesday 12:05 PM
//           <br />
//           Coast Tsawwassen Inn
//           <br />
//           1665 – 56th Street
//           <br />
//           Delta, BC V4L 2B2
//           <br />
//           Canada
//           <br />
//           tsawwasseninn.com
//         </div>
//       </div>
//       <div className="contactcontentlinks__bottom">
//         <br />
//         <h3>Our International Network Links</h3>
//         <p>
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             Rotary International
//           </Link>
//           <br />
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             RI President Home
//           </Link>
//           <br />
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             About Rotary
//           </Link>
//           <br />
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             Rotary History
//           </Link>
//           <br />
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             Rotary Foundation
//           </Link>
//           <br />
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             Rotary Foundation
//           </Link>
//           <br />
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             Joining Rotary
//           </Link>
//           <br />
//           <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//             For New Members
//           </Link>
//           <br />
//         </p>
//       </div>
//       <div className="contactsocialmedia__icons">
//         <h1>Follow us on</h1>
//         <Socialmedia />
//       </div>
//     </div>
//   );
// }

// export default Centercontentcontactus;

import React, { useState } from "react";
<<<<<<< HEAD
=======
import "./Centercontentcontactus.css";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
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
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Phone Number</label>
      <input
        type="number"
        placeholder="+254123456789"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
=======
import React from "react";
>>>>>>> 75092581f78fb7497b59c077c01af56b71ff23f5
import "./Centercontentcontactus.css";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
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
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Phone Number</label>
      <input
        type="number"
        placeholder="+254123456789"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Centercontentcontactus;
>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
>>>>>>> 75092581f78fb7497b59c077c01af56b71ff23f5
