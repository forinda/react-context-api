type AuthLink = {
    title: string;
    href: string;
    requiresAuth?: boolean;
}

type LinkGroup = {
    left?: AuthLink[];
    right?: AuthLink[];
    middle?: AuthLink[];
}

export type Links = {
    [key: string]: LinkGroup;
} 