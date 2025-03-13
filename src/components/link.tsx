import * as React from 'react';
import styled from 'styled-components';

interface LinkProps {
    href: string;
    underline?: boolean;
    textColour: string;
    children: string;
}

interface StyledLinkProps {
    textColour: string;
    underline?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
    text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
    color: ${props => props.textColour};
`;

const Link = (props: LinkProps) => {
    const { href, underline = false, children, textColour } = props;
    return (
        <StyledLink
            textColour={textColour}
            rel='noopener noreferrer'
            target='_blank'
            underline={underline}
            href={href}
        >
            {children}
        </StyledLink>
    )
}

export default Link;