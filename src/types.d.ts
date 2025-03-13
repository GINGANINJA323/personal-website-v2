import { Page, GithubEventType } from "./enums";

export interface StringIndexable {
    [key: string]: any;
}

export interface NavOption {
    label: string;
    value: Page;
}

export interface GithubActor {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

export interface GithubRepo {
    id: number;
    name: string;
    url: string;
}

export interface RawGithubEvent {
    id: string;
    type: GithubEventType;
    actor: GithubActor;
    repo: GithubRepo;
    payload: StringIndexable;
}

export interface FormattedGithubEvent {
    type: GithubEventType;
    actor: {
        name: string;
        url: string;
        pic: string;
    };
    repo: {
        name: string;
        url: string;
    };
    payload: StringIndexable;
}