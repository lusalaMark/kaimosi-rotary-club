import React from "react";
import "./Centercontentclubevents.css";
import Socialmedia from "./Socialmedia";
import image1 from "./countryside.jpg";

function Centercontentclubevents() {
  return (
    <div className="content__center">
      <div className="content__cen">
        <div className="logo">
          <img src={image1} alt="" />
        </div>

        <div className="feed">
          <p>Past Presidents of the Rotary Club of Ladner</p>
        </div>
        <div className="contactpeople">
          <div className="imgtext">
            1991 Ed Klassen <br />
            1992 Barry Irvine <br />
            1993 Rob Kamensek
            <br />
            1994 Jim Burnett
            <br />
            1995 David Rushton
            <br />
            1996 Irene Forcier
            <br />
            1997 Marjorie Higginson
            <br />
            1998 Arden Mang-Ho Leu
            <br />
            1999 Graham Witcher
            <br />
            2000 John Thomas
            <br />
            2001 Tom Siba
            <br />
            2002 Mel Baly
            <br />
            2003 Denis Denischuk
            <br />
            2004 Brenda Sheen
            <br />
            2005 Mike Storey
            <br />
            2006 Bill Bramwell
            <br />
            2007 Chu Wu
            <br />
            1988 Dan Cameron
            <br />
            1989 Ron Bollen
            <br />
            1990 Bob Stewart
          </div>
        </div>

        <div className="socialmedia__icons">
          <h1>Follow us on</h1>
          <Socialmedia />
        </div>
      </div>
    </div>
  );
}

export default Centercontentclubevents;
