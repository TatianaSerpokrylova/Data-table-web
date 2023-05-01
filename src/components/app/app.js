import React, { Component } from 'react';
import  ReactDOM  from 'react-dom/client';

import AddPanel from '../add-panel'  
import AppHeader from '../app-header';
import DataTable from '../data-table';
import HeadData from '../head-table';
import AddData from '../add-data';
import './app.css'

export default class App extends Component {
    
    state = {
        items: [
            { num: 11,
            name: "NNNNN FFFFFFFF",
            birthday: "12.11.1995",
            points: 300 }   
        ]
    }
    

    render () {
        return (
            <div className="rowcol-lg-4 col-md-6 mx-auto">
            <AppHeader/>
            <HeadData/>
            <DataTable/>
            <AddData
                num={this.state.num} 
                name={this.state.name} 
                birthday={this.state.birthday} 
                points={this.state.points}/>
            <div className='row text-centre'>
                <ul className='app-instructions'>
                    <li>Чтобы добавить данные в таблицу, заполните поля ввода и нажмите кнопку "Add"</li>
                    <li>Чтобы редактировать данные в таблице, выберите кандидата на редактирование, нажмите кнопку "Red" один раз. Данные отобразятся в поле ввода. Измените данные и нажмите кнопку "Red" для обновления данных в таблице</li>
                    <li>Чтобы удалить данные из таблицы выберите кандидата на удаление и нажмите кнопку "Del"</li>
                    </ul>
            </div>
            </div>);
    }

}