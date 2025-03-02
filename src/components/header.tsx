import * as React from 'react';
import styled from 'styled-components';
import Navbar from './nav-bar';
import ThemeSwitch from './theme-switch';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: ${window.innerWidth <= 600 ? 'column' : 'row'};
    justify-content: space-between;
    margin: 0px 10px;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Ed Glendinning</h1>
            <ThemeSwitch />
            <Navbar />
        </HeaderContainer>
    );
}

export default Header;