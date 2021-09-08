import React from 'react';
import Login from './component/Login';
import Header from './component/header/Header';

//import Header from './component/Header';
//import { BrowserRouter } from 'react-router-dom';
//import Navlink from './component/controll/Navlink';
//import Home from './component/Home';
//import { Route, Switch } from "react-router-dom";

export default function App() {
    return (
        <>
        
        <Header/>
        <Login/>
           {/*} <Header />
            <BrowserRouter>
                <Navlink />
                <Switch>
                    <Route exact path="/login" component={Login} />

                    <Route exact path="/home" component={Home} />
                </Switch>
            </BrowserRouter>*/}
        
        </>
    )
}
