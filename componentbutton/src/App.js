import './App.css';
import React from "react";
import {v4 as uuidv4} from 'uuid';
import Button from './components/UI/Button'
import Component from "./components/components/Component";

function App() {
    const [arr, setArr] = React.useState([])

    const addButton = (e) => {
        console.log(e.target.value)
        const newObg = {
            numb: arr.length === 0 ? 1 : arr.at(-1).numb + 1,
            id: uuidv4()
        }
        setArr([...arr, newObg])
    }


    const buttonMinus = () => {
        const newObg = {
            numb: arr.length === 0 ? 1 : arr.at(-1).numb - 1,
            id: uuidv4()
        }
        setArr([...arr, newObg])
    }

    const removeButton = (id) =>{
        setArr(arr.filter((item)=> item.id !== id))
    }

    return (
        <div className='App'>
            <div className="btn-group font-monospace" role="group">
                <Button onClickAdd={addButton} inc={'+'} onClickPutAway={buttonMinus} dec={'-'}/>
            </div>
            <Component onClickRemove={removeButton} arr={arr}/>
        </div>

    );
}

export default App;
