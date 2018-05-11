import { Dimension } from "./dimension";

export interface PubRoom {    
    _id?: string;
    label: string;
    likes?: number;
    admin: any[];
    members: any[];
    contents: any[];
    dimensions?: Dimension[];
    visible: string;
    activeUsers: any[]
}