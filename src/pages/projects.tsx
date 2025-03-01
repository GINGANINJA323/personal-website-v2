import * as React from 'react';
import styled from 'styled-components';
import text from '../en';

const ProjectBlock = styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
`;

const StyledLink = styled.a`
    text-decoration: none;
`;

const Projects = () => {
    const { projects } = text;
    return (
        <>
            {
                projects.map(p => (
                    <ProjectBlock>
                        <h2>{p.title}</h2>
                        <p>{p.body}</p>
                        <StyledLink href={p.link} target='_blank' rel='noopener noreferrer'>Link to the repository</StyledLink>
                    </ProjectBlock>
                ))
            }
        </>
    );
}

export default Projects;