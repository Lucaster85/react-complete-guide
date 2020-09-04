import React, { useState } from 'react'; //CON HOOKS
import Person from './Person/Person';
import './App.css';

//ACA USO EL STATE CON HOOK

const app = props => {
  //useState devuelve un array con dos indices
  //hacemos destructuring const [indice 0, indice 1] = useState({})
  const [personsState, setPersonsState] = useState({ 
    persons: [
      {id: 'lakjsdh', name: 'Lucas', age: 35},
      {id: 'jfkdls', name: 'Magdalena', age: 35},
      {id: 'pwoquey', name: 'Ramón', age: 4},
    ]
  })
//CON HOOK useState PUEDE DECLARAR MUTIPLES STATES Y ACATUALIZAR CADA UNO POR SEPARADO
  const [otherState, setOtherState] = useState({name: "Lucas"});

  const [showPersonsState, setShowPersonsState] = useState({showPersons: false});

  console.log(personsState.persons, otherState);

  const switchNameHandler = () => {
   setPersonsState({
     persons: [
      {id: 'lakjsdh', name: 'Lucaster', age: 35},
      {id: 'jfkdls', name: 'Magda', age: 35},
      {id: 'pwoquey', name: 'Moncho', age: 4},
  ]})
   
}
  const deletePersonHandler = (indexPerson) => {
    const persons = [...personsState.persons];
    persons.splice(indexPerson, 1);
    setPersonsState({persons}) //persons: persons
  }
    // console.log('Clickeado');

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((person) => {
      return person.id === id;
    });
    
    const person = {
      ...personsState.persons[personIndex]
    }
    
    person.name = event.target.value;
    
    const persons = [...personsState.persons];
    persons[personIndex] = person;
    
    setPersonsState({persons})
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState.showPersons;
    setShowPersonsState({showPersons: !doesShow})
}

let personsList = null;
        console.log(showPersonsState.showPersons);
        
        if (showPersonsState.showPersons) {
          personsList = 
          personsState.persons.map((person, i) => {
            return <Person
            key={person.id}
            click={() => deletePersonHandler(i)}
            name={person.name}
            age={person.age}
            changed={(event) => nameChangedHandler(event, person.id)}/>
          })}
            
  const classes = [];
      if (personsState.persons.length <= 2) classes.push('red')
      if (personsState.persons.length <= 1) classes.push('bold')

  const style = {
    backgroundColor: 'green'
  }
  return (
      <div className="App">
       <h1>React app</h1>
       <p className={classes.join(' ')} onClick={switchNameHandler}>It's working</p>
       <button 
       style={style} 
       onClick={togglePersonsHandler}>
         Show Persons
         </button>
        {personsList}
      </div>
    )
}

export default app;
