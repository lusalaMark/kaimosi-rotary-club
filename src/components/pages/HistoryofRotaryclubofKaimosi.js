import React from "react";
import "./HistoryofRotaryclubofKaimosi.css";
import Centercontenthistoryofrotaryclubofkaimosi from "./Centercontenthistoryofrotaryclubofkaimosi";
import Sidebarcontenthistoryofrotaryclubofkaimosi from "./Sidebarcontenthistoryofrotaryclubofkaimosi";

export default function HistoryofRotaryclubofKaimosi() {
  return (
    <div className="HistoryofRotaryclubofKaimosi__contact">
      <div className="HistoryofRotaryclubofKaimosi__heading">
        <h1>History of Kaimosi-Kenya Rotary</h1>
      </div>
      <div className="HistoryofRotaryclubofKaimosi__contentbody">
        <Sidebarcontenthistoryofrotaryclubofkaimosi />
        <Centercontenthistoryofrotaryclubofkaimosi />
      </div>
    </div>
  );
}
