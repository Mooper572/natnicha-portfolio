export type FilterType =
    | "ALL"
    | "UX/UI DESIGNER"
    | "FULL-STACK DEVELOPER"
    | "FRONT-END DEVELOPER"
    | "DEVELOPER";

export type Stat = {
    value: string;
    label: string;
};

export type FeatureCategory = {
    title: string;
    items: string[];
};

export type Section =
    | {
        type: "hero";
        title: string;
        description: string;
        subDescription?: string;
    }
    | {
        type: "image";
        src?: string;
        images?: string[];
    }
    | {
        type: "mobile";
        src?: string;
        images?: string[];
        title: string;
        description: string;
        stats?: Stat[];
    }
    | {
        type: "features";
        items?: string[];
        categories?: FeatureCategory[];
    };

export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    imageScale: boolean;
    techStack: string[];
    year: string;
    roles: string[];
    client?: string;
    filters: FilterType[];
    sections: Section[];
};