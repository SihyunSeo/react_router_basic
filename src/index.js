import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home....
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to='/topics/1'>HTML</NavLink></li>
        <li><NavLink to='/topics/2'>JS</NavLink></li>
        <li><NavLink to='/topics/3'>React</NavLink></li>
      </ul>
      <Switch>
        <Route path='/topics/1'>
          HTML is ...
        </Route>
        <Route path='/topics/2'>
          JS is ...
        </Route>
        <Route path='/topics/3'>
          React is ...
        </Route>
      </Switch>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact....
    </div>
  )
}

function App(){
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink exact to='/topics'>Topics</NavLink></li>
        <li><NavLink exact to='/contact'>Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/topics'><Topics></Topics></Route>
        <Route path='/contact'><Contact></Contact></Route>
        <Route path='/'>Not Found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
