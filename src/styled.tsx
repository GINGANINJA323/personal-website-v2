import styled from "styled-components";

export const LinedBlock = styled.div<{ underlineColour: string }>`
    width: 100%;
    border-bottom: 1px solid ${props => props.underlineColour};
`;

export const StyledLink = styled.a<{textColour: string}>`
    text-decoration: none;
    color: ${props => props.textColour};
`;