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
    imgSlugs?: string[];
    type?: string;
}

export interface PortfolioInfo {
    name: string;
    filters: string[];
    blurb: string;
}
