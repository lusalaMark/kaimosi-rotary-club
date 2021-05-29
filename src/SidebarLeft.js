import React from "react";
import "./SidebarLeft.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import image1 from "./images/profile.jpg";
import image2 from "./images/foundingmember.jpg";
import image3 from "./images/quakers.jpg";
import image4 from "./images/school.jpg";
import image5 from "./images/kaimosiwaterplant.jpg";
import image6 from "./images/virtualmeeting1.jpg";
import image7 from "./images/amuhonda.jpg";
import image8 from "./images/bumuyange.jpg";
import image9 from "./images/virtualmeeting2.jpg";
import image10 from "./images/team.jpg";
function SidebarLeft() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Rotary Opens opportunities</h5>
        <h4>
          The Rotary Club of Kaimosi continues to meet on Zoom at noon on
          Tuesdays through in response to health advisories. Please contact
          Patrick Lidovolo if you wish to join the meeting featuring any of the
          guest speakers listed in the right hand column.
        </h4>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitleMain">
          <p>
            <h1>Rotary Stories Of Kaimosi-Kenya Rotary Club</h1>
          </p>
        </div>
      </div>

      {/* first article ends here */}
      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>What Club Members should do.</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on May 17th 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              club members
            </h4>
          </div>
        </div>

        <div className="article10__body">
          <p>
            <img src={image10} alt="" />
            As a club member, you will be asked to: <br />
            1) Pay club dues <br />
            2) Attend meetings and events <br />
            3) Use your professional skills and talents to make a difference"
            <br />
            Governor Malemo (Brian Malemo) - during our face-to-face meeting
            hosted by local businessman Mr. Smuck Ngaira in Mulundu <br />
            Hardley Sinjaa
            <br />
            Lidovolo Malongo
            <br />
            Lidovolo Patrick
            <br />
            Norman Mwangah
            <br />
            Smuck Ngaira
            <br />
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>Kenyatta Otieno talking "Rotary"</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on May 5th 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Virtual Meeting
            </h4>
          </div>
        </div>

        <div className="article__body">
          <p>
            <img src={image9} alt="" />
            Kenyatta Otieno talking "Rotary" during our Virtual Meeting on May
            5, 2021
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>Privileged to have been joined by (Ret) Teacher</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on Apr 19th 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Mr. Imbali Musiomi Solomon
            </h4>
          </div>
        </div>

        <div className="article__body">
          <p>
            <img src={image8} alt="" />
            And just like that, we held a very lively and enlightening meeting,
            followed by a sumptuous meal - host Joseph Amuhonda.
            <br />
            Privileged to have been joined by (Ret) Teacher Mr. Imbali Musiomi
            Solomon <br />
            Thank you, Bumuyange.
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>
            KAIMOSI WATER…Treatment, Water-Related Diseases, and Contaminants
            and Options for Community Water Supply
          </h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on on Apr 17th 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Kaimosi-Kenya Rotary Club Face-to-Face Meeting Date
            </h4>
          </div>
        </div>

        <div className="article7__body">
          <p>
            <img src={image7} alt="" />
            Kaimosi-Kenya Rotary Club Face-to-Face Meeting
            <br /> Date: Sunday April 18, 2021.
            <br /> Time: 2:00PM - 3:00PM EAT
            <br /> Host: Mr Joseph Amuhonda
            <br /> Venue: Bumuyange Village ( "Lwandoni")
            <br /> Speaker: Mr. Joseph Memba (Water Engineer/Expert).
            <br /> <br /> BRING A FRIEND ◊ BRING A FRIEND ◊
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>Productive Virtual Meeting</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on on Apr 06 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Virtual Meeting
            </h4>
          </div>
        </div>

        <div className="article__body">
          <p>
            <img src={image6} alt="" />
            We held such a productive Virtual Meeting yesterday (April 5, 2021).
            <br />
            Please be our guest (virtual/face-to-face) at our upcoming meeting.
            <br /> Date: 18th April 2021, 2.00 pm EAT.
            <br />
            Host: Joseph Amuhonda Venue: Bumuyange Village, Shamakhokho Ward
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>Water Supply</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on March 31 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Kaimosi Water Supply --- "Kwa Hoyt"
            </h4>
          </div>
        </div>

        <div className="article__body">
          <p>
            <img src={image5} alt="" />
            Did you know that this water treatment plant was built around 1922
            by earlier missionaries in Kaimosi? It was the vision of one Fred
            Hoyt who was setting up a trade school in Kaimosi. To this day, the
            bridge at River 'Galagoli' is often referred to as "kwa Hoyt".
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>The first Christian school established in Kenya</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on March 25th 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Friends Kaimosi Demonstration Primary School
            </h4>
          </div>
        </div>

        <div className="article__body">
          <p>
            <img src={image4} alt="" />
            Friends Kaimosi Demonstration Primary School. The first Christian
            school established in Kenya. Did you know that???
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>Kaimosi Kenya</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on March 24th 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Quakers building
            </h4>
          </div>
        </div>

        <div className="article__body">
          <p>
            <img src={image3} alt="" />
            Welcome to Kaimosi Kenya
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>Founding Members</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on March 22nd 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Joseph Amuhonda
            </h4>
          </div>
        </div>

        <div className="article2__body">
          <p>
            <img src={image2} alt="" />
            Joseph Amuhonda is a founding member of Kaimosi - Kenya Rotary Club.
            On March 21, 2021, he was our guest speaker on the Topic: Community
            Development and Involvement from The Eyes of a Retiree: Plan and
            Prepare. If you retire in the rural areas, Joe advises you to
            "adjust accordingly, make some savings, acquire some assets, try
            attending village barazas, and be humble...”
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>Slogan</h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on March 10th 2021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              Profile
            </h4>
          </div>
        </div>

        <div className="article1__body">
          <p>
            <img src={image1} alt="" />
            Service to the Land of One People, Diverse Cultures, Landscape and
            Institutions - KAIMOSI
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft;
