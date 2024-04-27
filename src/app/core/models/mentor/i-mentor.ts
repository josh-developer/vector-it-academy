import { IUser } from "../shared/i-user";

export interface IMentor extends IUser {   
    bio: string;
    telegram_username?: string;
    phone?: string;
    birth_year?: number;
    status?: any;
}