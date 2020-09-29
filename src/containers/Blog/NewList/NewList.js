import React, {Component} from 'react';
import './NewList.css';
import List from '../List/List';
import {library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

class NewList extends Component{
    constructor (props) {
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput =this.handleInput.bind(this);
        this.addItem =this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    setUpdate(text,key){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.forEach(item => {      
          if(item.key===key){
            console.log(item.key +"    "+key)
            item.text= text;
          }
        })
        this.setState({
          items: items
        })
      }

    deleteItem(key){
        const deleteItems = this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items: deleteItems
            })
    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== ""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text:'',
                    key: ''
                }
            })
        }
    }

    render() {
        return (
            <div className="NewList">
                <h3>Heavily distracted by "Social media"...?</h3>
                <p>Add Your Tasks</p>
                <form id="form"  onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter Text"
                    value={this.state.currentItem.text}
                    onChange={this.handleInput} />
                    <button type="submit">Add</button>
                </form>
                <p>{this.state.items.text}</p>
                <List items={this.state.items}
                deleteItem ={this.deleteItem}
                setUpdate ={this.setUpdate}></List>
            </div>
        );
    }
}
export default NewList;