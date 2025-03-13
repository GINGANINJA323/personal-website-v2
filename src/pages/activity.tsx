import * as React from 'react';
import styled from 'styled-components';
import { FormattedGithubEvent, RawGithubEvent, StringIndexable } from '../types';
import { GithubEventType } from '../enums';
import { LinedBlock, StyledLink } from '../styled';
import StyleContext from '../context/style-context';
import { colours } from '../constants';

const ProfilePic = styled.img`
    width: ${window.innerWidth < 500 ? '3%' : '1%'};
    border-radius: 10px;
    margin-right: 3px;
`;

const Activity = () => {
    const [activity, setActivity] = React.useState<FormattedGithubEvent[]>();
    const { theme } = React.useContext(StyleContext);
    const { textColour } = colours[theme];

    const getSummaryForPayload = (event: FormattedGithubEvent) => {
        switch(event.type) {
            case GithubEventType.Create:
                return `${event.actor.name} created a ${event.payload.type}, ${event.payload.name || event.repo.name}.`;
            case GithubEventType.Pull:
                return `${event.actor.name} ${event.payload.action} a PR, "${event.payload.title}".`;
            case GithubEventType.Push:
                return `${event.actor.name} pushed ${event.payload.commits.length} ${event.payload.commits.length > 1 ? 'commits' : 'commit'} to ${event.repo.name}.`;
        }
    }

    const getPayloadForEvent = (type: GithubEventType, payload: StringIndexable) => {
        let obj: StringIndexable = { time: payload.created_at };
        switch (type) {
            case GithubEventType.Create:
                obj = {
                    ...obj,
                    name: payload.ref,
                    type: payload.ref_type,
                    desc: payload.description
                }
                break;
            case GithubEventType.Pull:
                obj = {
                    ...obj,
                    action: payload.action,
                    url: payload.pull_request.url,
                    title: payload.pull_request.title
                }
                break;
            case GithubEventType.Push:
                obj = {
                    ...obj,
                    commits: payload.commits.map((c: StringIndexable) => ({ msg: c.message, url: c.url }))
                }
                break;
        }

        return obj;
    }

    const fetchGithubActivity = async() => {
        const response = await fetch('https://api.github.com/users/GINGANINJA323/events');

        if (!response.ok) return null;

        const events = await response.json();

        const formatted = events.map((e: RawGithubEvent): FormattedGithubEvent => {
            const { repo, actor, payload, type } = e;

            return ({
                repo: {
                    name: repo.name,
                    url: repo.url
                },
                actor: {
                    name: actor.display_login,
                    url: actor.url,
                    pic: actor.avatar_url
                },
                type,
                payload: getPayloadForEvent(type, payload)
            });
        });

        setActivity(formatted);
    }

    React.useEffect(() => {
        fetchGithubActivity();
    }, []);

    return (
        <>
            {
                activity ?
                    activity.map(a => (
                        <LinedBlock underlineColour={textColour}>
                            <h2>{a.type}</h2>
                            <p>Author: <ProfilePic src={a.actor.pic}></ProfilePic><StyledLink underline textColour={colours[theme].textColour} href={`https://github.com/GINGANINJA323`}>{a.actor.name}</StyledLink></p>
                            <p>Repo: <StyledLink textColour={colours[theme].textColour} underline href={`https://github.com/GINGANINJA323/${a.repo.name}`}>{a.repo.name}</StyledLink></p>
                            <p>{`Summary: ${getSummaryForPayload(a)}`}</p>
                        </LinedBlock>
                    )) : null
            }
        </>
    );
}

export default Activity;