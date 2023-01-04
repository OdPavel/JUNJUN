import './App.css';
import Definitions from "./components/Definitions";
import DefinitionsFunc from "./components/DefinitionsFunc";


function App() {
    const definitions = [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
    ];


    return (
        <div className="App">
            <h3>Class component</h3>
            <dl>
                <Definitions data={definitions} />
            </dl>


            <h3>Func component</h3>
            <dl>
                {definitions.map((item)=>(
                    <DefinitionsFunc key={item.id} data={item}/>
                ))}
            </dl>


        </div>
    )
}

export default App;
