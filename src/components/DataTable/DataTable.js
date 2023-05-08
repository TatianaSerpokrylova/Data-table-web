import React, { Component } from "react";

import "./DataTable.css";
import "../AddPanel";
import HeadData from "../HeadTable";
import AddPanel from "../AddPanel";

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [], //массив данных
      isLoaded: false, //статус загрузки
      mark: false, //статус выделения цветом
      itemIdPrevious: null,
      selectedItem: null, //id выделенного элемента
      testItems: [
        //массив данных на случай, когда число запросов с сервера превысило 200 раз в день
        {
          id: 1,
          first_name: "Pascale",
          last_name: "Elstob",
          birthday: "21.07.1974",
          accumulated_points: 197,
        },
        {
          id: 2,
          first_name: "Charley",
          last_name: "Monkleigh",
          birthday: "18.07.1977",
          accumulated_points: 138,
        },
        {
          id: 3,
          first_name: "Frannie",
          last_name: "Shallcross",
          birthday: "25.09.1967",
          accumulated_points: 289,
        },
        {
          id: 4,
          first_name: "Noella",
          last_name: "Lidbetter",
          birthday: "03.01.1989",
          accumulated_points: 83,
        },
        {
          id: 5,
          first_name: "Myrle",
          last_name: "Cadany",
          birthday: "13.03.1956",
          accumulated_points: 11,
        },
        {
          id: 6,
          first_name: "Mavra",
          last_name: "Phillips",
          birthday: "10.07.1960",
          accumulated_points: 106,
        },
        {
          id: 7,
          first_name: "Roz",
          last_name: "Bonnavant",
          birthday: "13.06.1970",
          accumulated_points: 126,
        },
        {
          id: 8,
          first_name: "Chastity",
          last_name: "Leguay",
          birthday: "15.04.1961",
          accumulated_points: 278,
        },
        {
          id: 9,
          first_name: "Halie",
          last_name: "Maryon",
          birthday: "26.03.1979",
          accumulated_points: 30,
        },
        {
          id: 10,
          first_name: "Abie",
          last_name: "Kelby",
          birthday: "22.09.1975",
          accumulated_points: 270,
        },
        {
          id: 11,
          first_name: "Clare",
          last_name: "Nuth",
          birthday: "27.09.1969",
          accumulated_points: 260,
        },
        {
          id: 12,
          first_name: "Mahmud",
          last_name: "Bolingbroke",
          birthday: "25.06.1958",
          accumulated_points: 112,
        },
        {
          id: 13,
          first_name: "Xylia",
          last_name: "Stanyard",
          birthday: "10.08.1955",
          accumulated_points: 147,
        },
        {
          id: 14,
          first_name: "Buckie",
          last_name: "Coppens",
          birthday: "25.09.1996",
          accumulated_points: 20,
        },
        {
          id: 15,
          first_name: "Kym",
          last_name: "Anselm",
          birthday: "21.04.1980",
          accumulated_points: 237,
        },
        {
          id: 16,
          first_name: "Nettie",
          last_name: "Tellenbrok",
          birthday: "13.03.2000",
          accumulated_points: 90,
        },
        {
          id: 17,
          first_name: "Chaddy",
          last_name: "Dorie",
          birthday: "20.09.1985",
          accumulated_points: 156,
        },
        {
          id: 18,
          first_name: "Chrysler",
          last_name: "Stebbins",
          birthday: "21.06.1978",
          accumulated_points: 280,
        },
        {
          id: 19,
          first_name: "Clarinda",
          last_name: "Sigert",
          birthday: "08.06.1993",
          accumulated_points: 206,
        },
        {
          id: 20,
          first_name: "Hillie",
          last_name: "Amis",
          birthday: "16.06.1987",
          accumulated_points: 115,
        },
      ],
    };
  }

  //выделение элемента таблицы цветом
  selectedItem = (event, itemId) => {
    if (itemId === this.state.selectedItem && this.state.selectedItem != null) {
      this.setState(({ item }) => ({
        mark: !this.state.mark,
        selectedItem: itemId,
        itemIdPrevious: this.state.selectedItem,
      }));
    } else {
      this.setState(({ item }) => ({
        mark: true,
        selectedItem: itemId,
        itemIdPrevious: this.state.selectedItem,
      }));
    }
  };

  //удаление строки из таблицы
  deleteItem = (id) => {
    const updatedItem = this.state.item.filter(
      (item) => item.id !== this.state.selectedItem
    );
    if (this.state.selectedItem != null) {
      this.setState(({ item }) => {
        return { item: updatedItem };
      });
    } else alert("Пожалуйста, выберите элемент для удаления");
  };

  //добавление данных в таблицу
  addItem = (newItem) => {
    const currentItem = this.state.item; //массив данных до добавления элемента
    const newItemWithId = {
      ...newItem,
      id: Math.max(...currentItem.map((el) => el.id)) + 1,
    };
    //чтобы не вводились пустые ячейки, просим пользователя ввести все данные
    if (!newItemWithId.first_name || !newItemWithId.birthday) {
      alert("Пожалуйста, введите все данные");
    } else
      this.setState(({ item }) => ({
        item: [...item, newItemWithId],
        selectedItem: newItemWithId.id,
      }));
  };

  //редактирование данных
  redactItem = (updatedItem) => {
    const currentItem = this.state.item; //массив данных до изменения элемента
    currentItem.forEach((el) => {
      if (el.id === updatedItem.id) {
        el.first_name = updatedItem.first_name;
        el.birthday = updatedItem.birthday;
        el.accumulated_points = updatedItem.accumulated_points;
      }
    });
    this.setState(({ item }) => {
      return { item: currentItem };
    });
  };

  //получение данных с сервера
  componentDidMount() {
    fetch("https://my.api.mockaroo.com/customers_2.json?key=032062d0")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          item: json,
        });
      });
  }

  render() {
    let { item, isLoaded, mark, selectedItem } = this.state;
    if (!isLoaded) {
      return (
        <div className="container row row-cols-1">
          <span className="text-center">'Loading data..'</span>
        </div>
      );
    }
    //если с сервера пришло сообщение об ошибке, используется локально определенный массив
    if (item.error) {
      this.setState(({ item }) => {
        return { item: this.state.testItems };
      });
    } else {
      return (
        <div>
          <div className="without-padding">
            <AddPanel
              onDelete={() => {
                this.deleteItem(selectedItem);
              }} //удаление
              onAddNewItem={this.addItem} //добавление
              onRedactItem={this.redactItem} //редактирование
              id={selectedItem}
              item={item.find((item) => item.id === selectedItem)} //выделенный элемент таблицы
              mark={mark}
            />
            <HeadData />
          </div>
          <div className="container">
            <ul className="without-padding">
              {item.map((item) => (
                <div
                  className={` ${
                    this.state.mark && item.id === selectedItem
                      ? "one-list-marked"
                      : "one-list"
                  }`}
                  onClick={(e) => this.selectedItem(e, item.id)}
                >
                  <div className="list-id">
                    <li> {item.id}</li>
                  </div>
                  <div className="list-name">
                    <li>
                      {" "}
                      {item.first_name} {item.last_name}
                    </li>
                  </div>
                  <div className="list-birthday">
                    <li> {item.birthday}</li>
                  </div>
                  <div className="list-points">
                    <li> {item.accumulated_points}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}
