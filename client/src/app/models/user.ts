export interface User {
    _id?: string;    
    email: string;
    username: string;
    private: any[];
    public: any[];
    rooms: any[];
    friends: any[];
}