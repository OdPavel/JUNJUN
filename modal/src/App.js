import './App.css';
import React from "react";
import Modal from "./components/modal/Modal";

function App() {
    const [isShow, setIsShow] = React.useState(false)
    const toggle = () => {
        setIsShow(!isShow)
    }

    return (
        <div className="App">

            <h1>Modal</h1>
            {!isShow && <button className='btn btn-secondary' onClick={toggle}>Click my</button>}
           <Modal onClick={toggle} isShow={isShow}/>





        </div>
    );
}

export default App;
