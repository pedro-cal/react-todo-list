import React,{Component} from 'react';
import {FaList} from 'react-icons/fa';

import './App.css';
import ListBox from './components/ListBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      currentItem:{
        text:'',
        key:''
      }
    }
    // STILL DON'T UNDERSTAND THIS LINE BELOW
    this.handleInput = this.handleInput.bind(this);    
    this.addItem = this.addItem.bind(this);    
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);

    if (newItem !== "") {
      const newItems = [...this.state.list, newItem];
      this.setState({
        list: newItems,
        currentItem:{
          text:'',
          key:'',
        }
      });
    }
  }
  deleteItem(key){
    const filteredList = this.state.list.filter(item => item.key !== key);
    this.setState({
      list:filteredList
    })
  }
  setUpdate(text, key){
    const list = this.state.list;
    list.map(item => {
      if(item.key === key){
        item.text = text;
      }
      return list;
    })
    this.setState({
      list: list
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <span className="App-logo"><FaList/></span> Simple Todo List
          </h2>
        </header>
        <section id="list-section">
          <div id="list-header">
            <form id="todo-form" onSubmit={this.addItem}>
                <input placeholder="Enter text" type="text" 
                id="task-input" className = "app-item"
                value={this.state.currentItem.text}
                onChange={this.handleInput}/>
                <button type="submit" className="app-item" id="btn-add">Add</button>
              </form>
          </div>
          <div>
            <ListBox list={this.state.list}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}/>
          </div>        
        </section>
      </div>
    );
  }
  
}

export default App;
