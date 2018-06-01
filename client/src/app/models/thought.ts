
export interface Thought {    
        _id?: string,
        label: string,
        color?: string,
        clicks?: number,
        valued?: [{user: string, timestamp: Date, val: number }],
        dateDim?: [{user: string, label: string, val: Date }],
        locationDim?: [{user: string, label: string, val: string }],
        numberDim?: [{user: string, label: string, val: number }],
        tagDim?: [{user: string, label: string, val: string }],
        perspectives?: [{ label: string, dimensions: [{ label: string, dimType: string, startValue: string, endValue: string}]}],
        createdBy?: {user: string, timestamp: Date },
        shared?: [{user: string, timestamp: Date }],
        edited?: [{user: string, timestamp: Date, event: string, val: string }],
        deleted?: [{user: string, timestamp: Date }],
        contexts?: any[],
        contents?: any[],
        texture?: string,
        form?: string,
        public?: boolean,
        changeableBy?:  [string],
        viewableBy?:  [string],
        viewedBy?:  [string],
        emotions?: [{ user: string, timestamp: Date, event: string, val: number }]
}


//REGULÄRE Ausdrücke Noam Chomsky, conditional random field