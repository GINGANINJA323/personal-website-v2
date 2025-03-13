import * as React from 'react';
import text from '../en';
import StyleContext from '../context/style-context';
import { colours } from '../constants';
import { LinedBlock, StyledLink } from '../styled';



const Projects = () => {
    const { projects } = text;
    const { theme } = React.useContext(StyleContext);
    const { textColour } = colours[theme];

    return (
        <>
            {
                projects.map(p => (
                    <LinedBlock underlineColour={textColour}>
                        <h2>{p.title}</h2>
                        <p>{p.body}</p>
                        <StyledLink
                            textColour={textColour}
                            href={p.link} 
                            target='_blank'
                            rel='noopener noreferrer'>
                                Link to the repository
                            </StyledLink>
                    </LinedBlock>
                ))
            }
        </>
    );
}

export default Projects;