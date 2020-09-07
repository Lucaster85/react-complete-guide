import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
    const assignedClasses = [];
    let btnClass = null;

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2 ) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1 ) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>React app</h1>
            <p className={assignedClasses.join(' ')}>It's working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Show Persons
         </button>
        </div>
    );
}

export default cockpit;