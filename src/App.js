import React, { Component } from 'react'; //CON CLASES
import Styled from 'styled-components';
import Person from './Person/Person';
import './App.css';

const StyledBtn = Styled.button`
                background-color: ${props => props.alt ? "red" : "green"};
                color: white;
                font: inherit;
                border: 1px solid blue;
                padding: 8px;
                cursor: pointer;
                &:hover {
                  background-color: ${props => props.alt ? 'salmon' : 'yellowgreen'};
                  color: black;`;

class App extends Component {
  
  state = {
    persons: [
      {id: 'lakjsdhf', name: 'Lucas', age: 35},
      {id: 'jfkdls', name: 'Magdalena', age: 35},
      {id: 'pwoqueyrd', name: 'Ramón', age: 4},
    ],
     otherState: "Some other State",
     showPersons: false
  }
  // CUANDO HAGO EL setState HACE UN MERGE Y MANTIENE LOS ESTADOS QUE NO ESTOY REFERENCIANDO
    
    deletePersonHandler = (indexPerson) => {
      const persons = [...this.state.persons];
      persons.splice(indexPerson, 1);
      this.setState({persons}) //persons: persons
    }
    
    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex((person) => {
        return person.id === id;
      });
      
      const person = {
        ...this.state.persons[personIndex]
      }
      
      person.name = event.target.value;
      
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      
      this.setState({persons})
    }
    
    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }
  //EN LOS EVENTOS onClick VEMOS DOS MANERAS DIFERENTES DE PASARLE DATA
  //bind() es mas recomendable que () => 
  render() {
        let personsList = null;
        console.log(this.state.showPersons);
        
        if (this.state.showPersons) {
          personsList = (
            <div>
          {this.state.persons.map((person, i) => {
            return <Person
            key={person.id}
            click={() => this.deletePersonHandler(i)}
            name={person.name}
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>        
      );
    }

      const classes = [];
      if (this.state.persons.length <= 2) classes.push('red')
      if (this.state.persons.length <= 1) classes.push('bold')

    return (
      <div className="App">
       <h1>React app</h1>
       <p className={classes.join(' ')}>It's working</p>
       <StyledBtn 
       alt={this.state.showPersons}
       onClick={this.togglePersonsHandler}>
         Show Persons
         </StyledBtn>
        {personsList}
      </div>
    )
}
}

export default App;
