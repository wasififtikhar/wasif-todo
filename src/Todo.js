import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

const Todo = () => {
  const {t} = useTranslation();
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault()
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

//   delete items

const deleteItem = (id) => {
    const updatedItems = items.filter((elemnet, ind) => {
        return ind !== id;
    });

    setItems(updatedItems);
}


// Delete All Items

const RemoveAll = () => {
    setItems([]);
}
  return (
    <div>
      <>
        <div className="main-div">
          <div className="child-div">
            <h1>{t('welcome')}</h1>
          </div>

          <form className="addItems">
            <input
              type="text"
              placeholder={t('placeholder')}
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button className="addItem" onClick={addItem} type="submit">
                <span class="material-symbols-outlined">
                    add
                </span>
            </button>
          </form>

          <div className="showItems">
            {items.map((element, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{element}</h3>
                  <button onClick={() => deleteItem(ind)}><span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
              );
            })}
          </div>

          {/* clear all button */}
          <div className="showItems">
            <button className="btn" onClick={() => RemoveAll()}>{t('clear')}</button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Todo;
