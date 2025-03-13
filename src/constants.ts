import { Page } from "./enums";

export const navOptions = [
    {
        label: 'Home',
        value: Page.Home
    },
    {
        label: 'Projects',
        value: Page.Projects
    },
    {
        label: 'Activity',
        value: Page.Activity
    }
];

export const colours = {
    light: {
        backgroundColour: '#FFF',
        textColour: '#000'
    },
    dark: {
        backgroundColour: '#222',
        textColour: '#DDD'
    }
}

export const GithubEventMap = {
    PushEvent: {
        verb: 'pushed'
    }
}