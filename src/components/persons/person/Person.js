import React from 'react';

class Person extends React.Component {
    render() {
    console.log('[Person.js] rendering....');
    return (
        <div className="Person" >
            <p onClick={this.props.click}>Soy {this.props.name} y tengo {this.props.age} años.</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    )}
}

export default Person;