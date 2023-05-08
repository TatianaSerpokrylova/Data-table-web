import React, { Component } from "react";

import AppHeader from "../AppHeader";
import DataTable from "../DataTable";
import "./AppMain.css";

export default class App extends Component {
  render() {
    return (
      <div className="md-auto mx-auto">
        <AppHeader />
        <div className="row text-centre">
          <ul className="app-instructions">
            <li>
              Чтобы добавить данные в таблицу, заполните поля ввода и нажмите
              кнопку "Add"
            </li>
            <li>
              Чтобы редактировать данные в таблице, выберите кандидата на
              редактирование, нажмите кнопку "Red" один раз. Данные отобразятся
              в поле ввода. Измените данные и нажмите кнопку "Red" для
              обновления данных в таблице
            </li>
            <li>
              Чтобы удалить данные из таблицы выберите кандидата на удаление и
              нажмите кнопку "Del"
            </li>
          </ul>
        </div>
        <DataTable />
      </div>
    );
  }
}
