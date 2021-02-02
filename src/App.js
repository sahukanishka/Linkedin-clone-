import React from 'react';
import './App.css';
import Header from "./component/header/Header.js";
import Sidebar from "./component/sidebar/Sidebar.js";
import Post from "./component/post/Post.js";

function App() {
  return (
    <div className="app">
    <Header/>
    <div className="app__body">
    <Sidebar/>
    <Post/>
    </div>
   
    </div>
  );
}

export default App;
