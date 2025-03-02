import * as React from 'react';
import styled from 'styled-components';
import text from '../en';
import StyleContext from '../context/style-context';
import { colours } from '../constants';

const ProjectBlock = styled.div<{ underlineColour: string }>`
    width: 100%;
    border-bottom: 1px solid ${props => props.underlineColour};
`;

const StyledLink = styled.a<{textColour: string}>`
    text-decoration: none;
    color: ${props => props.textColour};
`;

const Projects = () => {
    const { projects } = text;
    const { theme } = React.useContext(StyleContext);
    const { textColour } = colours[theme];

    return (
        <>
            {
                projects.map(p => (
                    <ProjectBlock underlineColour={textColour}>
                        <h2>{p.title}</h2>
                        <p>{p.body}</p>
                        <StyledLink
                            textColour={textColour}
                            href={p.link} 
                            target='_blank'
                            rel='noopener noreferrer'>
                                Link to the repository
                            </StyledLink>
                    </ProjectBlock>
                ))
            }
        </>
    );
}

export default Projects;