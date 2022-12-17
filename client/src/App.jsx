import React from "react"
import Main from "./components/main/Main";
import {Provider} from "react-redux"
import store from './Redux/redux'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;