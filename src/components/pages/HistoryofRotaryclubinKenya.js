import React from "react";
import "./HistoryofRotaryclubinKenya.css";
import CentercontenthistoryofrotaryclubinKenya from "./CentercontenthistoryofrotaryclubinKenya";
import SidebarcontenthistoryofrotaryclubinKenya from "./SidebarcontenthistoryofrotaryclubinKenya";

export default function HistoryofRotaryclubinKenya() {
  return (
    <div className="HistoryofRotaryclubinKenya__contact">
      <div className="HistoryofRotaryclubinKenya__heading">
        <h1>History of Rotary clubs in Kenya</h1>
      </div>
      <div className="HistoryofRotaryclubinKenya__contentbody">
        <SidebarcontenthistoryofrotaryclubinKenya />
        <CentercontenthistoryofrotaryclubinKenya />
      </div>
    </div>
  );
}
