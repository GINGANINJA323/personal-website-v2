import styled from "styled-components";

export const LinedBlock = styled.div<{ underlineColour: string }>`
    width: 100%;
    border-bottom: 1px solid ${props => props.underlineColour};
`;