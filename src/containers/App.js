import React, { Component } from 'react';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import classes from './App.module.css';

class App extends Component {
  state = {
    persons: [
      {id: 'qwerty', name: 'Lucas', age: '35'},
      {id: 'asdfgh', name: 'Magdalena', age: '35'},
      {id: 'zxcvbn', name: 'Ramon', age: '4'}
    ],
    showPersons: false
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = e.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}
                  />
      }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />
        {persons}
      </div>
    );
  }
}

export default App;
