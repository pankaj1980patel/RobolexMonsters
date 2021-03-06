// import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import { CardList } from "./Components/cardList/cardList.component";
import {SearchField, searchField} from "./Components/searchField/searchField.component";

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((users) => this.setState({monsters:users}))
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      
    
    return (
      <div className="App">
        <h1>Mosters Rolodex</h1>
        <SearchField placeholder = "search monster" handleChange={e=>this.setState({searchField:e.target.value})}/>
        <CardList monsters = {filteredMonster}/>
      </div>
    );
  }
}


export default App;
