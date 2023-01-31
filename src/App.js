import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Notfound from './pages/Notfound/Notfound';
import Navbar from './component/Navbar/Navbar';
import NavScrollExample from './component/Navbar/Navbar';
import Movies from './pages/Movies/Movies';
import ViewMovie from './pages/Movies/ViewMovie';
import { Search } from 'react-bootstrap-icons';
import SearchMovie from './component/Search/Search';
import Cart from './pages/Cart/Cart';
import { LangContext } from './component/context/LangContext';
import { useState } from 'react';

function App() {

  const [contextLang,setContextLang]=useState("English")
  
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      <LangContext.Provider value={{contextLang,setContextLang}}>
      <BrowserRouter>
      {/* <Navbar/> */}
      <NavScrollExample/>
      <Switch>
      <Route exact path={"/"} component={Movies} />
      <Route exact path={"/search/"} component={SearchMovie}/>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={"/view/:id"} component={ViewMovie}/>
      <Route exact path={"/cart"} component={Cart}/>
      {/* <Route exact path={"/view/:id"} component={Search}/> */}
      <Route exact path={"*"} component={Notfound} />
      </Switch>
      </BrowserRouter>
      </LangContext.Provider>

    </div>
  );
}

export default App;
