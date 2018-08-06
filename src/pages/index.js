import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import './index.css';
import avatar from '../images/kallyn-gowdy.jpg';

const Red = ({ children }) => (
  <span className="red">
    {children}
  </span>
);

const Blue = ({ children }) => (
  <span className="blue">
    {children}
  </span>
);

const Yellow = ({ children }) => (
  <span className="yellow">
    {children}
  </span>
);

const Green = ({ children }) => (
  <span className="green">
    {children}
  </span>
);

const IndexPage = () => (
  <Layout background={true}>
    <div className="title-container">
      <img className="avatar" src={avatar} alt="Kallyn Gowdy" />
      <h1 className="header dark">Kallyn Gowdy</h1>
      <p className="sub-header dark">Software Developer</p>
    </div>
    <div className="body-container">
      <p>
        Hello, I'm Kallyn Gowdy!
        I'm a software developer who's worked in the industry since 2014 on a (very) wide variety of projects.
        I started my journey on the Microsoft .Net software stack way back when I was 12 but since then I've gained experience
        with many different technologies, including (but not limited to):
      </p>
      <ul>
        <li><Red>Web Development:</Red>
          <ul>
            <li>HTML &amp; CSS</li>
            <li>TypeScript &amp; JavaScript</li>
            <li>Angular (1 &amp; 2)</li>
            <li>Ember.js</li>
            <li>Node.js</li>
            <li>ASP.Net MVC</li>
            <li>SQL Server</li>
            <li>MySQL</li>
          </ul>
        </li>
        <li><Green>Game Development:</Green>
          <ul>
            <li>C# &amp; C++</li>
            <li>Java (Native Android Plugins)</li>
            <li>Objective-C (Native iOS Plugins)</li>
            <li>Unity 3D</li>
            <li>Firebase</li>
            <li>ARCore &amp; ARKit</li>
          </ul>
        </li>
        <li><Yellow>Mobile Development:</Yellow>
          <ul>
            <li>Native Android</li>
            <li>Xamarin</li>
            <li>Cordova</li>
          </ul>
        </li>
        <li><Blue>Certifications:</Blue>
          <ul>
            <li><a target="_blank" href="https://www.youracclaim.com/badges/221decff-1bdb-4b4f-82f4-b3cb94b29688">Microsoft Certified Solutions Associate (MCSA)</a></li>
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
