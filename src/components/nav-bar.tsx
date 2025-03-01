import * as React from 'react';
import styled from 'styled-components';
import { NavigationContext } from '../context/nav-context';
import { navOptions } from '../constants';

interface NavButtonProps {
    selected?: boolean;
}

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 10%;
`;

const NavButton = styled.button<NavButtonProps>`
    border: none;
    background-color: #FFF;
    ${props => props.selected ? 'text-decoration: underline;' : ''}
    font-size: 20px;
`;

const Navbar = () => {
    const { selected, setSelected } = React.useContext(NavigationContext);

    return (
        <NavbarContainer>
            {
                navOptions.map(o => <NavButton selected={o.value === selected} onClick={() => setSelected(o.value)}>{o.label}</NavButton>)
            }
        </NavbarContainer>
    );
}

export default Navbar;