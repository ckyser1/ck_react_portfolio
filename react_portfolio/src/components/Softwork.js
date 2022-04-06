import React from 'react';
import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'white',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
    <h3>A Computer Language Based Resource Hub</h3>
    <p>A Guide for All Things Coding</p>
    <a href="https://github.com/ckyser1/Language_Resource_Hub">
        <img src="/langhub.png" alt="Project 1: Language Hub"></img>
    </a>
      
    <h3>Reconnect App</h3>
    <p>A Lost and Found Board</p>
    <p>A website designed to reconnect families during times of hardship</p>
    <a href="https://github.com/ckyser1/Project-2-Family_Reconnect_Board">
        <img src="/reconnect.jpg" alt="lost and found board"></img>
        
    </a>

    <h3>A Weather Dashboard</h3>
    <p>Local Guide to the Weather using API features</p>
    <a href="https://github.com/ckyser1/OSUBootcamp_Weather_Dashboard">
        <img src="/weatherdash.png" alt="Weather dashboard for cities"></img>
    </a>
    </section>

  );
}

export default Section;