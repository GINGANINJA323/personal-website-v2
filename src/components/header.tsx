import * as React from 'react';
import styled from 'styled-components';
import Navbar from './nav-bar';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 10px;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Ed Glendinning</h1>
            <Navbar />
        </HeaderContainer>
    );
}

export default Header;