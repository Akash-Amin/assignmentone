import React from 'react';
import Landingpage from './component/landingpage/Landingpage';
import Signinpage from './component/signinpage/Signinpage';
//import Home from './component/home/Home';
//import About from './component/about/About';
//import Products from './component/products/Products';
//import Contact from './component/contact/Contact';
//import Header from './component/header/Header';

//import Header from './component/Header';
import { BrowserRouter,Switch ,Route,Redirect} from 'react-router-dom';
//import Navlink from './component/controll/Navlink';
//import Home from './component/Home';
//import { Route, Switch } from "react-router-dom";

const App=()=> {
    return (
        <>
        
            <BrowserRouter>
                <Switch>
                <Route exact path="/register" component={Landingpage} />
                
                <Route exact path="/signin" component={Signinpage} />
                    {/* <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/contact" component={Contact} /> */}
                </Switch>
            </BrowserRouter>
        
        </>
    )
}
export default App;
