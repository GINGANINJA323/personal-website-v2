import * as React from 'react';
import styled from 'styled-components';
import { Page } from '../enums';
import About from '../pages/about';
import Projects from '../pages/projects';
import Activity from '../pages/activity';

interface ContentProps {
    page: Page;
}

const Container = styled.div`
    margin: 0px 10px;
`;

const Content = (props: ContentProps) => {
    const { page } = props;

    switch(page) {
        case Page.Home:
            return (
                <Container>
                    <About />
                </Container>
            )
        case Page.Projects:
            return (
                <Container>
                    <Projects />
                </Container>
            )
        case Page.Activity:
            return (
                <Container>
                    <Activity />
                </Container>
            )
    }
}

export default Content;