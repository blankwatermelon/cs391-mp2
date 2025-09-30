// creating a type for the anime data we will be receiving from the API
export type Anime = {
    mal_id: number;
    title: string;
    score: number;
    episodes: number;
    images: {
    jpg: {
        image_url: string;
    };
    };
    synopsis: string;
    year: number;
};
