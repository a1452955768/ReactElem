import React from 'react';
import './App.css';
import Chengshiliebiao from "./jiahan/chengshiliebiao"
import Search from "./jiahan/search"
import {Route,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Route exact path="/" component={Chengshiliebiao}></Route>
      <Route path="/search/:id" component={Search}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
