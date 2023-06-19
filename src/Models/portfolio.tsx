export interface CompletePortfolio {
    info: PortfolioInfo;
    entries: PortfolioData[];
}

export interface PortfolioData {
    entryId: number;
    name: string;
    blurb: string;
    url?: string;
    skills?: string[];
    imgSlug?: string;
    type?: string;
}

export interface PortfolioInfo {
    name: string;
    filters: string[];
    blurb: string;
}
