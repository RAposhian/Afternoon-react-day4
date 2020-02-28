import React, {Component} from 'react';
import List from './Components/List'
import './App.css';

import data from './data'

class App  extends Component {
   constructor(props) {
      super(props);


      this.state = {
         list: data,
         id: 0,
         button: '< Previous'
      }
      this.increaseId = this.increaseId.bind(this);
      this.decreaseId = this.decreaseId.bind(this);
      this.deleteItem = this.deleteItem.bind(this)
      
   }

   increaseId(){
      if(this.state.id < this.state.list.length -1){
      this.setState({ id: this.state.id + 1 })
      console.log(this.state.id)
   }
   }

   decreaseId(){
      if(this.state.id > 0){
         this.setState({ id: this.state.id - 1 })
         console.log(this.state.id)
      }
   }

   deleteItem(){
      let newList = this.state.list.filter((e, i) => (this.state.id === i) ? null : e)
      this.setState({ list: newList})
   }

   render(){
      return(
         <div className="main">
            <div className="header">
               <p>Home</p>
            </div>
            <div className="Center-Box">
               <List id={this.state.id} users={this.state.list}/>
      <span className="counter">{this.state.id + 1}/{this.state.list.length}</span>
            </div>   
               <div className="button-bar">
                  <button onClick={this.decreaseId} className="outsideButtons">{this.state.button}</button>
                  <div>   
                     <button className="centerButtons">Edit</button>
                     <button className="centerButtons" onClick= {this.deleteItem}>Delete</button>
                     <button className="centerButtons">New</button>
                  </div>
                  <button id = {this.state.id} onClick={this.increaseId} className="outsideButtons">Next ></button>
               </div>
         </div>
      )
   }
}

export default App;
