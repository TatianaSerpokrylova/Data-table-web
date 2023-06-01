import React, { useState, useEffect } from "react";
import "./AddPanel.css";
import "../DataTable";

const AddPanelWithHooks = props => {
  const { onDelete, id, item, mark } = props;
  const [lineData, setLineData] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    birthday: "",
    accumulated_points: 0,
  });
  const [btnRedStatus, pressOnBtn] = useState(false);
  useEffect(() => {
    console.log();
  }, [lineData.first_name]);

  const handleNameChange = event => {
    const currentLine = lineData;
    currentLine.first_name = event.target.value;
    console.log(lineData.first_name);
    setLineData(currentLine);
  };

  const handleBirthdayChange = event => {
    const currentLine = lineData;
    currentLine.birthday = event.target.value;
    setLineData(currentLine);
  };

  const handlePointsChange = event => {
    const currentLine = lineData;
    currentLine.accumulated_points = event.target.value;
    setLineData(currentLine);
  };
  //первое нажатие Red - вывод данных в <input>
  //второе нажатие Red - редактированние данных в таблице
  const redItem = (item, mark, id) => {
    //поменять статус кнопки
    pressOnBtn(!btnRedStatus);
    //
    if (btnRedStatus) {
      props.onRedactItem(lineData);
    }
    if (mark) {
      const currentLine = lineData;
      currentLine.id = id;
      currentLine.first_name = item.first_name + " " + item.last_name;
      currentLine.birthday = item.birthday;
      currentLine.accumulated_points = item.accumulated_points;
      setLineData(currentLine);
    }

    if (!mark) {
      alert("Пожалуйста, выберите элемент для редактирования");
      pressOnBtn(false);
    }
  };
  return (
    <div className="container text-center add-panel-main">
      <div className="add-panel-input-box">
        <input
          type="text"
          className="add-panel-name"
          placeholder="Name"
          value={lineData.first_name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="add-panel-birthday"
          placeholder="Birthday"
          value={lineData.birthday}
          onChange={handleBirthdayChange}
        />
        <input
          type="text"
          className="add-panel-points"
          placeholder="Points"
          value={lineData.accumulated_points}
          onChange={handlePointsChange}
        />
      </div>
      <div className="add-panel-btns-box">
        <button
          type="button"
          className="button-add btn-info"
          onClick={() => props.onAddNewItem(lineData)}
        >
          Add
        </button>
        <button
          type="button"
          className={
            btnRedStatus ? "button-add btn-outline-info" : "button-add btn-info"
          }
          onClick={() => redItem(item, mark, id)}
        >
          Red
        </button>
        <button
          type="button"
          className="button-add btn-danger"
          onClick={onDelete}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default AddPanelWithHooks;
