import React, { Component } from 'react';

import './data-table.css';
import '../add-panel'
import AddPanel from '../add-panel';



export default class DataTable extends Component {
    constructor (props){
        super(props);
        this.state={
            item:[],                 //массив данных
            isLoaded:false,          //статус загрузки
            mark:false,              //статус выделения цветом
            itemIdPrevious:null,
            selectedItem: null,      //id выделенного элемента
            testItems : [            //массив данных на случай, когда число запросов с сервера превысило 200 раз в день
                {id:1, first_name:"Denver",last_name:"Broadway",birthday:"13.02.1970",accumulated_points:884},
                {id:2,first_name:"Tremain",last_name:"Allenson",birthday:"26.07.1985",accumulated_points:104},
                {id:3,first_name:"Blaire",last_name:"Hoofe",birthday:"21.08.1979",accumulated_points:916},
                {id:4,first_name:"Alyson",last_name:"Rawdales",birthday:"03.02.1968",accumulated_points:987},
                {id:5,first_name:"Concettina",last_name:"Frissell",birthday:"06.09.1999",accumulated_points:206}]
        };
    }


    //выделение элемента таблицы цветом
    selectedItem = (event, itemId) => {
        if ((itemId===this.state.selectedItem)&&(this.state.selectedItem!=null)) {
            this.setState(({item}) => ({
            mark: !this.state.mark,
            selectedItem: itemId,
            itemIdPrevious: this.state.selectedItem
        }));
        } else {
            this.setState(({item}) => ({
                mark: true,
                selectedItem: itemId,
                itemIdPrevious: this.state.selectedItem
            }));
        }
        
        console.log("сейчас выбран", itemId);
        console.log("до этого был выбран", this.state.selectedItem);

    }

    //удаление строки из таблицы
    deleteItem = (id) => {
        const updatedItem = this.state.item.filter((item) => item.id !== this.state.selectedItem);
        if (this.state.selectedItem!=null) {
            this.setState(({item})=>{
            return {item: updatedItem}
            })}
        else alert("Пожалуйста, выберите элемент для удаления");
        
    };

    //добавление данных в таблицу
    addItem = (newItem) =>{
        const currentItem = this.state.item; //массив данных до добавления элемента
        const newItemWithId = {
            ...newItem,
            id: Math.max(...currentItem.map(el => el.id)) + 1,
        }; 
        console.log("newItemWithId=",newItemWithId);
        //чтобы не вводились пустые ячейки, просим пользователя ввести все данные
        if ((!newItemWithId.first_name)||(!newItemWithId.birthday)) {
            alert("Пожалуйста, введите все данные")
        } else                                 
            this.setState(({item}) => ({
                item: [...item, newItemWithId],
                selectedItem: newItemWithId.id
            }));    
    };

    //редактирование данных
    redactItem = (updatedItem) => {
        const currentItem = this.state.item; //массив данных до изменения элемента
        currentItem.forEach(el => {
            if (el.id === updatedItem.id) {
                el.first_name=updatedItem.first_name;
                el.birthday=updatedItem.birthday;
                el.accumulated_points=updatedItem.accumulated_points;
            };
        })
        this.setState(({item})=>{
            return {item: currentItem}
        });

    }
    

    //получение данных с сервера
    componentDidMount () {
            fetch('https://my.api.mockaroo.com/shop_customers.json?key=032062d0')
                .then(res=>res.json())
                .then(json=>{
                    this.setState({
                        isLoaded:true,
                        item:json,
                    })
                });
    }
    //https://my.api.mockaroo.com/shop_customers.json?key=032062d0
    
    render() { 
        let {item, isLoaded,mark, selectedItem} = this.state;
        if (!isLoaded){
            return (
                <div className='container row row-cols-1'> 
                    <span className='text-center'>'Loading data..'</span>
                </div>
            )
        }
        //если с сервера пришло сообщение об ошибке, используется локально определенный массив
        if (item.error) {
            this.setState(({item})=>{
                return {item: this.state.testItems}
            });
        }
        else{
            return (
                <div className='container  ' >
                    <ul className='without-padding' >
                        {item.map(item => (
                            <div  
                            className={` ${
                                ((this.state.mark)&&(item.id === selectedItem)) ? 'one-list-marked' : 'one-list'}`} 
                            onClick={(e) => this.selectedItem(e, item.id)}>
                                <div className='list-id'>
                                    <li> {item.id}</li>
                                </div>
                                <div className='list-name' >
                                    <li> {item.first_name} {item.last_name}</li> 
                                </div>
                                <div className='list-birthday'>
                                    <li> {item.birthday}</li>
                                </div>
                                <div className='list-points'>
                                    <li> {item.accumulated_points}</li>
                                </div>
                                
                            </div>
                        ))}
                        </ul>
                        <AddPanel 
                            onDelete={() =>{ this.deleteItem(selectedItem) }} //удаление
                            onAddNewItem={this.addItem}                       //добавление
                            onRedactItem={this.redactItem}                    //редактирование
                            id={selectedItem}                                 
                            item={item.find(item => item.id === selectedItem)} //выделенный элемент таблицы
                            mark={mark}
                        />
                </div>
            );
        }  
    }
}

