import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './component/Hello';
import Destr from './component/Destr';
import SampleState from './component/SampleState';
import Counter from './component/Counter';
import CounterTwo from './component/CounterTwo';
import Controlled from './component/Controlled';
import Routing from './component/Routing';
import { BrowserRouter as Router } from 'react-router-dom'
//import { HashRouter as Router } from 'react-router-dom'

import Counter3 from './component/Counter3';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import counterReducer from "./reducers/counterReduce"
import { composeWithDevTools } from "redux-devtools-extension"
import loggerMiddleWare from "./middleware/loggerMiddleWare"
import middleWare2 from "./middleware/middleWare2"
import Ajax from './component/Ajax';

const appStore = createStore(counterReducer, composeWithDevTools(applyMiddleware(loggerMiddleWare, middleWare2)));
console.log("appStore : " + appStore);
const rootNode = document.getElementById("app");
ReactDOM.render(
  <div>
    <Hello name="Adi" greet="Hi">Stupid guy</Hello>
    <Hello name="Raj" greet="Byeee" ></Hello>
    <Hello name="Sam" greet="Good Morning" />
    <Hello />
    <Destr myColors={["Red", "Blue", "Green"]}></Destr>
    <SampleState></SampleState>
    <Counter></Counter>
    <CounterTwo></CounterTwo>
    <Controlled></Controlled>
    <Router><Routing /></Router>
    <Provider store={appStore} ><Counter3 /></Provider>
    <Ajax></Ajax>
  </div>
  , rootNode);
