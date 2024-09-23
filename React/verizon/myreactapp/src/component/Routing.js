import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';
import menu from '../menu.css';

class Routing extends React.Component {



  render() {

    const sClass = {
      textDecoration: "none",
      color: "tomato"
    }

    const jsx = <div>
      <ul>
        <li> <NavLink exact to="/" activeClassName="menuStyle">Home</NavLink></li>
        <li> <NavLink to="/aboutUs" activeClassName="menuStyle">About Us</NavLink></li>
        <li> <NavLink to="/contactUs" activeClassName="menuStyle">Contact us</NavLink></li>
        <li> <NavLink to="/redirect" activeClassName="menuStyle">Redirect</NavLink></li>
        <li> <NavLink to="/prompt" activeClassName="menuStyle">Prompt</NavLink></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Redirect" component={RedirectUrl} />
        <Route path="/Prompt" component={PromptUrl} />
        <Route path="*" render={(props) => <h1>Page Not found {props.match.url}</h1>} />

      </Switch>
    </div>



    return jsx;
  }
}

const Home = () => <h1>Home</h1>;
const ContactUs = (props) => {
  console.log(props);
  return <h1>Contact Us</h1>
};
const AboutUs = () => <h1>About Us</h1>;
const RedirectUrl = () => <div><h1>Redirect</h1><Redirect to="/ContactUs" /></div>;
const PromptUrl = () => <div><h1>Prompt</h1><Prompt message="Sure to leave the page" /></div>;


export default Routing;
