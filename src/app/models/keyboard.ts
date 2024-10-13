export type IKeyType = "icon" | "number" | "button";
export type IKeyValue = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "delete" | "success";

export interface IKey {
    type: IKeyType;
    value: IKeyValue;
}