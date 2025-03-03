import * as React from 'react';
import styled from 'styled-components';
import { Page, Theme } from './enums';
import { NavigationContext } from './context/nav-context';
import Header from './components/header';
import Content from './components/content';
import StyleContext from './context/style-context';
import { colours } from './constants';

const ContentContainer = styled.div<{ backgroundColour: string, textColour: string, selectedPage: Page }>`
    background-color: ${props => props.backgroundColour};
    color: ${props => props.textColour};
    height: ${props => props.selectedPage === Page.Projects && window.innerHeight < 900 ? 'fit-content' : '100vh'};
`;

const App = () => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [selectedPage, setSelectedPage] = React.useState<Page>(Page.Home);
    const [theme, setTheme] = React.useState<Theme>(prefersDarkMode ? Theme.Dark : Theme.Light);

    const { backgroundColour, textColour } = colours[theme];
    
    return (
        <NavigationContext.Provider value={{ selected: selectedPage, setSelected: setSelectedPage }}>
            <StyleContext.Provider value={{ theme, setTheme }}>
                <ContentContainer selectedPage={selectedPage} backgroundColour={backgroundColour} textColour={textColour}>
                    <Header />
                    <Content page={selectedPage} />
                </ContentContainer>
            </StyleContext.Provider>
        </NavigationContext.Provider>
    );
}

export default App;