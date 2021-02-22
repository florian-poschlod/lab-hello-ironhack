import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const navigation = (
  <nav className="flex row space-between">
    <img src="../images/ironhack-logo.svg" alt="Iron hack logo"></img>
    <img src="../images/menu-top.svg" alt="Menu icon"></img>
  </nav>
)

const article1 = (
  <article id="article-1">
    <h1>Say hello to ReactJS</h1>
    <p className="text-big-white">You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
    <a href="">Awesome!</a>
  </article>
)

const infoBox = (
  <div className="info-box">
    <img src="../images/icon1.png" alt="Iron hack logo"></img>
    <h2>Declarative</h2>
    <p>React makes it painless to create interactive UIs.</p>
  </div>
)

const article2 = (
  <article id="article-2" className="flex row space-between">
    {infoBox}
    {infoBox}
    {infoBox}
  </article>
)

const landingPage = (
  <div id="landing">
    {navigation}
    {article1}
    {article2}
  </div>
)

ReactDOM.render(landingPage, document.getElementById('root'));