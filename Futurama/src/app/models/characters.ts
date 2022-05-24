export interface Characters {
    id: number;
    name: {
        first: string;
        last: string;
    },
    images: {
        headshot: string;
        main: string;
    },
    gender: string;
    species: string;
    homeplanet: string;
    occupation: string;
    sayings: string[];
}
