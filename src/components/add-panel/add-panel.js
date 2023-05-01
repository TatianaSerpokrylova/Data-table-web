import React, { Component } from "react";
import './add-panel.css';
import '../data-table'

export default class AddPanel  extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            first_name: "",
            last_name:"",
            birthday:"",
            accumulated_points:0,
            btnRedPressed:false,
        };
    }

    handleNameChange = (event) => {
        this.setState({ first_name: event.target.value });
        console.log(this.state.item);
    }
    
    handleBirthdayChange = (event) => {
        this.setState({ birthday: event.target.value });
        console.log(this.state.item);

    }
    
    handlePointsChange = (event) => {
        this.setState({ accumulated_points: event.target.value });
        console.log(this.state.item);

    }
    //первое нажатие Red - вывод данных в <input>
    //второе нажатие Red - редактированние данных в таблице
    redItem = (item, mark, id) => {
        this.setState({btnRedPressed:!this.state.btnRedPressed}) //поменять статус кнопки
        //
        if (this.state.btnRedPressed) {
            this.props.onRedactItem(this.state)
        }
        if (mark) 
            this.setState({
                id: this.props.item.id,
                first_name: this.props.item.first_name+" "+this.props.item.last_name,
                birthday: this.props.item.birthday,
                accumulated_points: this.props.item.accumulated_points,
            });
        if (!mark) {
            alert("Пожалуйста, выберите элемент для редактирования")
            this.setState({btnRedPressed: false});
        }
            
    }
    render(){
        const { onDelete, id, item, mark } = this.props;
        return (
                <div className='container text-center add-panel-main'>
                    <input 
                        type="text" 
                        className='add-panel-name' 
                        placeholder="Name" 
                        value={this.state.first_name} 
                        onChange={this.handleNameChange} />
                    <input 
                        type="text" 
                        className='add-panel-birthday' 
                        placeholder="Birthday" 
                        value={this.state.birthday} 
                        onChange={this.handleBirthdayChange} />
                    <input 
                        type="text" 
                        className='add-panel-points' 
                        placeholder="Points" 
                        value={this.state.accumulated_points} 
                        onChange={this.handlePointsChange}/>
                    <button 
                        type="button" 
                        className="button-add btn-info" 
                        onClick={() =>this.props.onAddNewItem(this.state)}>
                    Add
                    </button>
                    <button 
                        type="button" 
                        className={this.state.btnRedPressed?'button-add btn-outline-info':'button-add btn-info'}
                        onClick={()=>this.redItem(item,mark,id)}>
                        
                    Red
                    </button>
                    <button 
                        type="button" 
                        className="button-add btn-danger" 
                        onClick={onDelete}>
                    Del
                    </button>
                </div>
            )
    }
}
