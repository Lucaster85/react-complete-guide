import React from 'react';
import Person from './person/Person';

class Persons extends React.Component {
    // static getDerivedStateFromProps(props,state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props, state);
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js shouldComponentUpdate');
        console.log(nextProps.persons);
        console.log(this.props.persons);
        if (this.props.persons !== nextProps.persons) {
            return true;
        } else {
            return false;
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Perons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!!!'};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, i) => {
    return (<Person 
                click={() => this.props.clicked(i)}
                name={person.name}
                age={person.age}
                key={person.name + i}
                changed={(e) => this.props.changed(e, person.id )}
                />
    )}
    )}
}

export default Persons;