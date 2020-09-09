import React from 'react';
import Person from './person/Person';
import person from './person/Person';

const persons = props => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, i) => {
    return <Person 
                click={() => props.clicked(i)}
                name={person.name}
                age={person.age}
                key={person.name + i}
                changed={(e) => props.changed(e, person.id )}
                />
})}

export default persons;