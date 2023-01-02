import './App.css';
import Cart from "./components/Cart";

function App() {
    return (
        <div className="App">
            <Cart title={'hi'} />
            <hr/>
            <Cart text={'how are you?'}/>
            <hr/>
            <Cart title={'hi'} text={'how are you?'}/>
        </div>
    );
}

export default App;
