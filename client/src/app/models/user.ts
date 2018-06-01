import { Perspective } from "./perspective";

export interface User {
    _id?: string,
    email?: string,
    username: string,
    stream?: [string],
    friends?: [string],
    followUser?: [string],
    followThought?: [string],
    startPerspectives?: Perspective[],
    changeHistory?: [{ event: string, timestamp: Date }],
    socialHistory?: [{ user: string, event: string, timestamp: Date }]
}