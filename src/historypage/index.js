import react, { useState } from "react";
import HistoryItem from "../historyitem";
import "./index.css";

const HistoryPage = () => {
  const [inputText, setInput] = useState("");

  const filterHistory = (event) => {
    setInput(event.target.value);
  };

  const inputField = () => {
    return (
      <input
        type="search"
        value={inputText}
        placeholder="Search History"
        onChange={filterHistory}
      ></input>
    );
  };

  return (
    <div className="bg-container">
      <div className="bue-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
        />
        <div className="search-bar">
          <img
            className="searchicon"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          {inputField()}
        </div>
      </div>
      <div className="container-2">
        <HistoryItem inputText={inputText} />
      </div>
    </div>
  );
};

export default HistoryPage;
