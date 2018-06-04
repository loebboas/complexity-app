import { Perspective } from "./perspective";
import { Thought } from "./thought";

export interface User {
    _id?: string,
    email?: string,
    username: string,
    stream?: [string],
    friends?: [string],
    followUser?: [string],
    followThought?: [string],
    starterPerspectives?: any[],
    lastPerspectives?: any[],
    changeHistory?: [{ event: string, timestamp: Date }],
    socialHistory?: [{ user: string, event: string, timestamp: Date }]
}