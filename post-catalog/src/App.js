import React from "react";
import './App.css';
import axios from "axios";
import PostCatalog from "./components/postCatalog/PostCatalog";


function App() {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPosts(res.data)
            }).catch((error) => {
            console.log(error)
        })
    },)


    return (
        <div className="App">
            {posts.map((post) => <PostCatalog key={post.id} post={post}/>)}
        </div>
    );
}

export default App;
