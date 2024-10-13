import { isoDate } from "./common";

export type idType = "cc" | "ti" | "ce";
export type gender = "m" | "f";

export interface IIdTypes {
    key: idType;
    value: string;
};

export interface IGenders {
    key: gender;
    value: string;
};

export interface IUser {
    id: string;
    phone: string;
    idType: idType;
    issueDate: isoDate;
    birthdate: isoDate;
    gender: gender;
    email: string;
    pin: string;
}