import { MouseEventHandler } from "react";

export interface IRoomCard {
    id: string | number;
    title: string;
    description: string;
    beds: number;
    baths: number;
    guests: number;
    price: number;
    type: string; // shared or entire place
    imgSrc: string;
    onDelete: any;
}
