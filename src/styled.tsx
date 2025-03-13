import styled from "styled-components";

export const LinedBlock = styled.div<{ underlineColour: string }>`
    width: 100%;
    border-bottom: 1px solid ${props => props.underlineColour};
`;

interface StyledLinkProps {
    textColour: string;
    underline?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
    text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
    color: ${props => props.textColour};
`;