import * as React from 'react';
import text from '../en';

const About = () => {
    return (
        <>
            <h2>{text.about.headings.main}</h2>
            <p>{text.about.body}</p>
            <h2>{text.about.headings.skills}</h2>
            <ul>
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>MySQL</li>
                <li>React Native</li>
                <li>Typescript</li>
                <li>Git</li>
                <li>NodeJS</li>
            </ul>
        </>
    );
}

export default About;