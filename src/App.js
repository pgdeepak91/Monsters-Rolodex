import React from 'react';

import {CardList} from './components/card-list/card-list.component'; 
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super(); // it calls the constructor method on the component class

    this.state = {
      monsters: [],
      searchField : ''
    };

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  handleChange = (e) => {
      this.setState({searchField: e.target.value});
  }
render() {
  const { monsters, searchField } = this.state; 
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = 'Search Monsters'
          // handleChange = {e => { //synthetic event
          //   this.setState({searchField: e.target.value});
          //   }}
          handleChange = {this.handleChange}
        />
      {/* <CardList monsters={this.state.monsters}>
      
      </CardList> */}
      <CardList monsters={filteredMonsters}>
      
      </CardList>

    </div>
  );
}
}

export default App;
