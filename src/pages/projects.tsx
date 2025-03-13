import * as React from 'react';
import text from '../en';
import StyleContext from '../context/style-context';
import { colours } from '../constants';
import { LinedBlock } from '../styled';
import Link from '../components/link';



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
                        <Link
                            textColour={textColour}
                            href={p.link} 
                        >
                                Link to the repository
                            </Link>
                    </LinedBlock>
                ))
            }
        </>
    );
}

export default Projects;