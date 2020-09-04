import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
                    width: 60%;
                    margin: 16px auto;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 16px;
                    text-align: center;
                    @media (min-width: 500px): {
                        width: 450px;
                    }
                    `;

const person = props => {

    return (
    <StyledDiv>
        <p onClick={props.click}>Soy {props.name} y tengo {props.age} años.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
    );
}

export default person;