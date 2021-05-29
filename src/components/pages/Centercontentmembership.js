import React, { useState } from "react";
import { db } from "../../firebase";
import "./Centercontentmembership.css";

const Centercontentmembership = () => {
  const [fullname, setFullname] = useState("");
  const [homeemail, setHomeemail] = useState("");
  const [workemail, setWorkemail] = useState("");
  const [homephonenumber, setHomephonenumber] = useState("");
  const [workphonenumber, setWorkphonenumber] = useState("");
  const [mobilephonenumber, setMobilephonenumber] = useState("");
  const [homestreetaddressone, setHomestreetaddressone] = useState("");
  const [homestreetaddresstwo, setHomestreetaddresstwo] = useState("");
  const [homecity, setHomecity] = useState("");
  const [homeprovince, setHomeprovince] = useState("");
  const [homepostalcode, setHomepostalcode] = useState("");
  const [homecountry, setHomecountry] = useState("");
  const [workstreetaddressone, setWorkstreetaddressone] = useState("");
  const [workstreetaddresstwo, setWorkstreetaddresstwo] = useState("");
  const [workcity, setWorkcity] = useState("");
  const [workprovince, setWorkprovince] = useState("");
  const [workpostalcode, setWorkpostalcode] = useState("");
  const [workcountry, setWorkcountry] = useState("");

  const [birthdate, setBirthdate] = useState("");

  const [interestmessage, setInterestmessage] = useState("");
  const [describemessage, setDescribemessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("membership")
      .add({
        fullname: fullname,
        homeemail: homeemail,
        workemail: workemail,
        homephonenumber: homephonenumber,
        workphonenumber: workphonenumber,
        mobilephonenumber: mobilephonenumber,
        homestreetaddressone: homestreetaddressone,
        homestreetaddresstwo: homestreetaddresstwo,
        homecity: homecity,
        homeprovince: homeprovince,
        homepostalcode: homepostalcode,
        homecountry: homecountry,
        workstreetaddressone: workstreetaddressone,
        workstreetaddresstwo: workstreetaddresstwo,
        workcity: workcity,
        workprovince: workprovince,
        workpostalcode: workpostalcode,
        workcountry: workcountry,
        birthdate: birthdate,
        interestmessage: interestmessage,
        describemessage: describemessage,
      })
      .then(() => {
        setLoader(false);
        alert(
          "Your message has been submitted successfully👍 to Kaimosi-Kenya Rotary Club"
        );
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFullname("");
    setWorkemail("");
    setHomeemail("");
    setHomephonenumber("");
    setWorkphonenumber("");
    setMobilephonenumber("");
    setHomestreetaddressone("");
    setHomestreetaddresstwo("");
    setHomecity("");
    setHomeprovince("");
    setHomepostalcode("");
    setHomecountry("");
    setWorkstreetaddressone("");
    setWorkstreetaddresstwo("");
    setWorkcity("");
    setWorkprovince("");
    setWorkpostalcode("");
    setWorkcountry("");
    setBirthdate("");
    setInterestmessage("");
    setDescribemessage("");
  };
  return (
    <div className="centercontent__membership">
      <form className="form" onSubmit={handleSubmit}>
        <label>Enter your Full Name</label>
        <input
          placeholder=""
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <label>Enter your primary email </label>
        <input
          placeholder=""
          value={homeemail}
          onChange={(e) => setHomeemail(e.target.value)}
        />

        <label>Enter your secondary email</label>
        <input
          placeholder=""
          value={workemail}
          onChange={(e) => setWorkemail(e.target.value)}
        />

        <label>Primary Phone Number:</label>
        <input
          placeholder=""
          value={homephonenumber}
          onChange={(e) => setHomephonenumber(e.target.value)}
        />

        <label>Secondary Phone Number:</label>
        <input
          placeholder=""
          value={workphonenumber}
          onChange={(e) => setWorkphonenumber(e.target.value)}
        />

        <h2>Primary Address:</h2>
        <label>Primary Street Address</label>
        <input
          placeholder=""
          value={homestreetaddressone}
          onChange={(e) => setHomestreetaddressone(e.target.value)}
        />
        <label>Secondary Street Address</label>
        <input
          placeholder=""
          value={homestreetaddresstwo}
          onChange={(e) => setHomestreetaddresstwo(e.target.value)}
        />
        <label>City</label>
        <input
          placeholder=""
          value={homecity}
          onChange={(e) => setHomecity(e.target.value)}
        />
        <label>State / Province</label>
        <input
          placeholder=""
          value={homeprovince}
          onChange={(e) => setHomeprovince(e.target.value)}
        />
        <label>Primary Phone Number:</label>
        <input
          placeholder=""
          value={homepostalcode}
          onChange={(e) => setHomepostalcode(e.target.value)}
        />
        <label>Secondary Phone Number:</label>
        <input
          placeholder=""
          value={homecountry}
          onChange={(e) => setHomecountry(e.target.value)}
        />

        <label>Birth Date:</label>
        <input
          placeholder=""
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <label>
          Why are you interested in joining our Kaimosi-Kenya Rotary Club?
        </label>
        <textarea
          placeholder=""
          value={interestmessage}
          onChange={(e) => setInterestmessage(e.target.value)}
        ></textarea>

        <label>
          Describe your past involvement with the community and service?
        </label>
        <textarea
          placeholder=""
          value={describemessage}
          onChange={(e) => setDescribemessage(e.target.value)}
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

export default Centercontentmembership;
