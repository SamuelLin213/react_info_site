import React from "react"
import "../style.css";

export default function Main() {
    return (
      <div className="mContent">
          <h1 className="contentTitle">Fun facts about React</h1>
          <ul className="contentList">
            <li className="listItem">Was first released in 2013</li>
            <li className="listItem">Was originally created by Jordan Walke</li>
            <li className="listItem">Has over 100k stars on Github</li>
            <li className="listItem">Is maintained by Facebook</li>
            <li className="listItem">Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
    )
}
