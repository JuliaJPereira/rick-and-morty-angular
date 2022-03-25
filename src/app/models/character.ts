import { ILocation } from './location';
import { Oringin } from './origin';

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Oringin;
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
}