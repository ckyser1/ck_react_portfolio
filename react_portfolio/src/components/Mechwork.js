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
    <h1>Mechanical Design</h1>
      <h3>MPW Industrial Services</h3>
        <p>Senior Level Design of Large Scale Water Purification Equipment</p>
        <p>Highlight: Industry First Mobile UR/RO: <a href="https://vimeo.com/177403763">See the Video</a></p> 
        <img src="/UF_RO Interior_Low Resolution.webp" alt="uf/ro water purification machine"></img>
      
    <h3>Anomatic</h3>
        <p>Aluminum Part Design with an Ownership of Chemical and Anodizing Processes</p>
        <p>Highlight: Anodizing Line Ownership: <a href="https://vimeo.com/373967077?embedded=true&source=vimeo_logo&owner=4387790">See the Video</a></p> 
        <img src="/DAI-Anomatic-line-photo.jpg" alt="anodizing line"></img>

    </section>

  );
}

export default Section;
