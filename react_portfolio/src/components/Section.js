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
      <h2>A Bit About Me</h2>
      <p>
      I'm Cody Kyser, a Designer of all things.  I have a degree in Mechanical Engineering from Ohio University with 8 years of design experience.  My work as an engineer has seen me designing large scale equipment for powerplants, running teams of contractors, overseeing communications with customers, and overseeing implementation of equipment.  I've expanded my trade to web devolopment, website design, and all things code.  With my background of design, as well as a familiarity with a team atmosphere, I think I would be a great fit for many employers.
      </p>
      
    </section>
  );
}

export default Section;
