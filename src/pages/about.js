import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import './index.css';
import './about.css';

const IndexPage = () => (
  <Layout background={false} headerClass="about">
    <div className="body-container about">
        <h1 className="header">About Me</h1>
        <div><em>2016</em></div>
        <p>
            About me, well, I grew up always wanting to play on a computer. 
            I remember using Windows 95 and 98 to play games and (if we were lucky to have it working, this was Y2K era remember) browse the internet.
            Beyond the basics though, I didn't start working with computers until my brother came home one day after a computer programming camp put on by one of the local colleges. 
            (Ferris State University)
        </p>
        <p>
            He came back and taught me the basics of Visual Basic.
            My first program was a simple Windows Forms application that displayed different colors and text based on what button you pressed.
            At the age of 12, this was tons of fun. (oddly enough) I had always thought programming would be fun for me, but actually being able to manipulate what happened on the screen was very motivating.
        </p>
        <p>
            My first program was over 7000 lines long. The problem is that now I know I could have simplified it down to under 200 lines of code by just using a couple methods.
            But, as I was then, I had no idea of methods and all I wanted to do was experiment.
            I know the simple (yet stupid) solution to recurring tasks, just copy-paste!
        </p>
        <p>
            Learning how easy it was to make a program motivated me to get a book on C++ because I had in my mind that C++ was the language of video games. 
            (and obviously making games would be great!) I learned that C++ isn't very similar to VB, however, that didn't matter to me considering I hardly knew Visual Basic.
            That book has been very beneficial to me, if only in familiarizing me with C++ style semantics.
        </p>
        <p>
            From there I learned about Unity 3D from a friend and became interested in making my own 3D games. 
            I started out using UnityScript for writing behaviors but after learning and seeing more C# code floating around the community I decided that I should learn it. 
            I picked up a reference book on C# 4.0 and dove right into it. 
            Once I understood the different constructs and reasoning behind them, I started liking C# much more than Unityscript or C++ and especially more than Visual Basic.
        </p>
        <p>
            As I became more familiar with C# I decided to work on more random ideas and games that would pop into my head. 
            Some of these projects have turned into open source projects on Github, while others have stayed in my private collection. Some were created from curiosities while others were built to solve a specific problem. 
            The scope of the projects range from a custom IoC library, to my own JavaScript Front-End Framework, to the sorting algorithms I implemented in class.
        </p>
        <p>
            OK, time to switch subjects now, I like playing video games (The Uncharted games have been favorites of mine), working on some random project that is my current hobby (programming, fixing a computer, etc.) and occasionally playing sports (Soccer, Basketball, Baseball, etc.).
            I've played organized sports for most of my life, with baseball up until High School and soccer till graduation.
        </p>
        <p>
            More recently, I have been studying Digital Media Software Engineering at Ferris State University in Grand Rapids.
            If you want flashy stats, I have made the dean's list in all of my three semesters of attendance, additionally scoring above a 4.0 in a couple of my classes.
        </p>
        <p>
            Thanks for taking the time to read this. It's just a little bit of who I am, but it's a big part of who I'm going to become. Thanks again and I hope you have a great day!
        </p>
    </div>
  </Layout>
)

export default IndexPage
