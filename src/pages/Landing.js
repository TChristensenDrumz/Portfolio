import React from 'react';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';

function Landing() {
    return (
        <div>
            <Skills />
            <Projects />
            <About />
        </div>
    )
}

export default Landing;
