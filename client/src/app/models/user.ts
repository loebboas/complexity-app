export interface User {
    _id?: string,
    email?: string,
    username: string,
    stream?: [string],
    friends?: [string],
    followUser?: [string],
    followThought?: [string],
    startPerspectives?: [{ label: string, dimensions: [{ label: string, dimType: string, startValue: string, endValue: string}]}],
    changeHistory?: [{ event: string, timestamp: Date }],
    socialHistory?: [{ user: string, event: string, timestamp: Date }]
}