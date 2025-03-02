import * as React from 'react';
import styled from 'styled-components';
import { NavigationContext } from '../context/nav-context';
import { colours, navOptions } from '../constants';
import StyleContext from '../context/style-context';

interface NavButtonProps {
    selected?: boolean;
    backgroundColour: string;
    textColour: string;
}

const breakpoints = {
    xs: '40',
    s: '20',
    m: '15',
    l: '12'
}

const getWidth = (width: number): string => {
    if (width <= 500) return breakpoints.xs;
    if (width <= 700) return breakpoints.s
    if (width <= 900) return breakpoints.m;

    return breakpoints.l;
}

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: ${getWidth(window.innerWidth)}%;
`;

const NavButton = styled.button<NavButtonProps>`
    border: none;
    background-color: ${props => props.backgroundColour};
    color: ${props => props.textColour};
    ${props => props.selected ? 'text-decoration: underline;' : ''}
    font-size: 20px;
`;

const Navbar = () => {
    const { selected, setSelected } = React.useContext(NavigationContext);
    const { theme } = React.useContext(StyleContext);
    const { backgroundColour, textColour } = colours[theme];

    return (
        <NavbarContainer>
            {
                navOptions.map(o => <NavButton
                    backgroundColour={backgroundColour}
                    textColour={textColour} selected={o.value === selected}
                    onClick={() => setSelected(o.value)}>{o.label}
                </NavButton>)
            }
        </NavbarContainer>
    );
}

export default Navbar;