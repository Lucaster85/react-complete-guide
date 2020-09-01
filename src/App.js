import React, { Component } from 'react'; //CON CLASES
//import React, { useState } from 'react'; //CON HOOKS
import Person from './Person/Person';
import './App.css';

//ACA USO EL STATE CON HOOK

// const app = props => {

//   const [personsState, setPersonsState] = useState({ 
//     persons: [
//       {name: 'Lucas', age: 35},
//       {name: 'Magdalena', age: 35},
//       {name: 'Ramón', age: 4},
//     ]
//   })
// //CON HOOK useState PUEDE DECLARAR MUTIPLES STATES Y ACATUALIZAR CADA UNO POR SEPARADO
//   const [otherState, setOtherState] = useState({name: "Lucas"});

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//    setPersonsState({
//      persons: [
//       {name: 'Lucaster', age: 35},
//       {name: 'Magda', age: 35},
//       {name: 'Moncho', age: 4},
//   ]})
   
   
//     // console.log('Clickeado');
//   }
  
//     return (
//       <div className="App">
//        <h1>React app</h1>
//        <button onClick={switchNameHandler}> Switch Name </button>
//        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Un texto desde children</Person>
//        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       </div>
//     )
//   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hola, estoy creado desde React.createElement'));
// }

// export default app;

//ACA USO ES STATE CON CLASES

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
  /* switchNameHandler = newName => {
   this.setState({
     persons: [
      {name: newName, age: 35},
      {name: 'Magda', age: 35},
      {name: 'Moncho', age: 4},
  ]})
  } */

  deletePersonHandler = (indexPerson) => {
    //let persons = this.state.persons.slice(); //ESTO DEVUELVE UNA COPIA DEL ARRAY PARA NO MANIPULAR EL STATE
    const persons = [...this.state.persons]; //spread operator, creo un nuevo array con los datos del state
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

    // console.log('Clickeado');
    //EN LOS EVENTOS onClick VEMOS DOS MANERAS DIFERENTES DE PASARLE DATA
    //bind() es mas recomendable que () => 
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let personsList = null;

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
          {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Castro")}
          changed={this.nameChangedHandler}>Un texto desde children</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> */}
        </div>        
      );
    }

    return (
      <div className="App">
       <h1>React app</h1>
       <button style={style} onClick={() => this.switchNameHandler('Dario!!!')}> Switch Name </button>
       <button style={style} onClick={this.togglePersonsHandler}> Show Persons </button>
        {personsList}
        {/* PARA REALISAR UN CONDICIONAL LO MEJOR ES USAR EL JXS EN UNA VARIABLE DENTRO
        DEL METODO RENDER */}
      </div>
    )
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hola, estoy creado desde React.createElement'));
}
}

export default App;
