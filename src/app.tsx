import * as React from 'react';
import styled from 'styled-components';
import { Page } from './enums';
import { NavigationContext } from './context/nav-context';
import Header from './components/header';
import Content from './components/content';

const ContentContainer = styled.div``;

const App = () => {
    const [selectedPage, setSelectedPage] = React.useState<Page>(Page.Home);
    
    return (
        <NavigationContext.Provider value={{ selected: selectedPage, setSelected: setSelectedPage }}>
            <Header />
            <Content page={selectedPage} />
        </NavigationContext.Provider>
    );
}

export default App;