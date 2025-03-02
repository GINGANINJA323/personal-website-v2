import * as React from 'react';
import styled from 'styled-components';
import StyleContext from '../context/style-context';
import { Theme } from '../enums';
import { colours } from '../constants';

const ThemeButton = styled.button<{ backgroundColour: string, textColour: string }>`
    border: none;
    font-size: 20px;
    background-color: ${props => props.backgroundColour};
    color: ${props => props.textColour};
`;

const labelMap = {
    dark: 'Dark',
    light: 'Light'
}

const ThemeSwitch = () => {
    const { theme, setTheme } = React.useContext(StyleContext);
    const { backgroundColour, textColour } = colours[theme];

    return (
        <ThemeButton backgroundColour={backgroundColour} textColour={textColour} onClick={() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)}>{`Theme: ${labelMap[theme]}`}</ThemeButton>
    );
}

export default ThemeSwitch;