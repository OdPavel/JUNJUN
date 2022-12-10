import './App.css';
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import {useEffect, useState} from "react";


function App() {
    const [albums, setAlbums] = useState([])
    const [id, setId] = useState()
    const [photos, setPhotos] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/albums')
            const getAlbums = await data.json()
            setAlbums(getAlbums)
        }
        fetchData()
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            const getPhotos = await data.json()
            setPhotos(getPhotos)
        }
        fetchData()
    }, [id]);

    const onClickHandler = (id) => {
        setId(id)
    }

    return (
        <div className="App">
            {!id ? <h1>Albums</h1> : <h1>Photos</h1>}

            {id ?
                <>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}> {photos.map((item) => {
                        return <Photos key={item.id} photo={item}/>
                    })
                    }
                    </div>
                    <button onClick={()=>setId('')}>Albums</button>
                </>

                :
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {albums.map((item) => {
                        return <Albums key={item.id} album={item} onClick={onClickHandler}/>
                    })
                    }
                </div>}


        </div>
    );
}

export default App;
