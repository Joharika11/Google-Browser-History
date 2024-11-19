import "./index.css";
import { useEffect, useState } from "react";
import initialHistoryList from "../constant";

export default function HistoryItem({ inputText }) {
  const deletedIds = JSON.parse(localStorage.getItem("deletedIds")) || [];
  const filteredList = initialHistoryList.filter(
    (item) => !deletedIds.includes(item.id)
  );
  const [listOfItems, setListOfItems] = useState(filteredList);

  const handleDelete = (id) => {
    const deletedIds = JSON.parse(localStorage.getItem("deletedIds")) || [];
    const deletedArray = [...deletedIds, id];
    localStorage.setItem("deletedIds", JSON.stringify(deletedArray));
    const filteredList = listOfItems.filter((item) => item.id !== id);
    setListOfItems(filteredList);
  };

  const newFilteredList = listOfItems.filter((item) =>
    item.title.toLowerCase().includes(inputText.toLowerCase())
  );
  if (newFilteredList.length !== 0) {
    return newFilteredList.map((item) => {
      return (
        <div className="White-card" key={item.id}>
          <ul className="ul">
            <li>
              <div className="oneItem">
                <div className="time">{item.timeAccessed}</div>
                <div className="restitem">
                  <div className="threeItems">
                    <img className="icon" src={item.logoUrl} />
                    <p className="p">{item.title}</p>{" "}
                    <div className="url">{item.domainUrl}</div>
                  </div>
                  <img
                    className="dlt-img"
                    style={{ cursor: "pointer" }}
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    });
  } else {
    return <>No History to show</>;
  }
}
