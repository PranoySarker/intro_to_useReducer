import { useReducer } from 'react';
import React from 'react';

const initialState = {
    counter1: 0,
    counter2: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter1: state.counter1 + action.value };
        case 'decrement':
            return { ...state, counter1: state.counter1 - action.value };
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return { state };
    }
}

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Increment,Decrement by 1</h1>
            <div>Count - {count.counter1}</div>
            <button type="button" onClick={() => dispatch({
                type: 'increment',
                value: 1
            })}>Increment</ button>
            <button type="button" onClick={() => dispatch({
                type: 'decrement',
                value: 1
            })}>Decrement</ button>

            <h1>Increment,Decrement by 5</h1>
            <div>Count - {count.counter2}</div>
            <button type="button" onClick={() => dispatch({
                type: 'increment2',
                value: 5
            })}>Increment</ button>
            <button type="button" onClick={() => dispatch({
                type: 'decrement2',
                value: 5
            })}>Decrement</ button>
        </div>
    );
};

export default ComplexCounter;