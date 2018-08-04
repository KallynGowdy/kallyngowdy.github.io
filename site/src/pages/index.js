import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import './index.css'

const Red = ({children}) => (
  <span className="red">
    {children}
  </span>
);

const Blue = ({children}) => (
  <span className="blue">
    {children}
  </span>
);

const Yellow = ({children}) => (
  <span className="yellow">
    {children}
  </span>
);

const Green = ({children}) => (
  <span className="green">
    {children}
  </span>
);

const Black = ({children}) => (
  <span className="black">
    {children}
  </span>
);

const Turqoise = ({children}) => (
  <span className="turqoise">
    {children}
  </span>
);

const Silver = ({children}) => (
  <span className="silver">
    {children}
  </span>
);

const IndexPage = () => (
  <Layout>
    <div className="title-container">
      <h1 className="header">Kallyn Gowdy</h1>
      <p className="sub-header">Software Developer</p>
    </div>
    <div className="body-container">
      <p>
        Hello, I'm Kallyn Gowdy!
        I have about 6 years of experience with C# and the .Net stack.
        Among those years I have learned many different features and design patterns.
        From reflection and MVC or MVVM to Context Free Grammars and Parsers, I have spent a lot of time learning.
        I have experience with design patterns such as Inversion of Control and Factories and I have worked with technologies such as Git, and Visual Studio ('8 - '17).
      </p>
      <h3>Skills & Achievements</h3>
      <ul>
        <li><Black>3+ years</Black> of full stack web development experience (<Red>JS</Red>, <Yellow>CSS</Yellow>, <Blue>HTML</Blue>, <Green>Angular & Ember</Green>)</li>
        <li><Black>6+ years</Black> of <Turqoise>C# .Net</Turqoise> experience</li>
        <li><Black>4+ years</Black> of <Silver>Unity 3D</Silver> experience</li>
        <li><Black><a href="https://www.youracclaim.com/badges/221decff-1bdb-4b4f-82f4-b3cb94b29688">Microsoft Certified Solutions Associate</a></Black></li>
        <li>Quick Learner:
          <ul>
            <li>First SPA was also first large website, built on Ember.js in less than four months.</li>
            <li>Learned about and built a fully functional GLR-Parser in about a month. (refactoring in progress)</li>
            <li>First fully-functional Cordova app was created in less than a month.</li>
          </ul>
        </li>
      </ul>
      <hr />
      <div className="row">
        <div className="col-6">
          <h3>Open Source</h3>
          <p>
            <a href="https://github.com/KallynGowdy">Check out</a> some of my open source projects for the quality of my work.
            While they might not all be done, they all showcase my skill and ability to effectively document the function of each and every member.
          </p>
        </div>
        <div className="col-6">
          <h3>Stack Overflow</h3>
          <p>
            Check out my <a href="https://stackoverflow.com/users/1832856/atinskrita">Stack Overflow profile</a>, it shows how I've helped other people with their coding problems.
          </p>
          <a href="https://stackoverflow.com/users/1832856/atinskrita">
            <img src="https://stackoverflow.com/users/flair/1832856.png" width="208" height="58" alt="profile for AtinSkrita at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for AtinSkrita at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
