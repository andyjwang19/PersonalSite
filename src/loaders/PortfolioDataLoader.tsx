import bartendingPortfolioData from '../data/bartendingPortfolioData.json';
import codePortfolioData from '../data/codePortfolioData.json';
import designPortfolioData from '../data/designPortfolioData.json';

interface PortfolioData {
    entryId: number;
    name: string;
    blurb: string;
    url?: string;
    skills?: string[];
    imgSlug?: string;
    type?: string;
}

interface PortfolioInfo {
    name: string;
    filters: string[];
    blurb: string;
}

function determineData(type?: string) {
    if (portfolioParamCheck(type) === 1) {
        return null;
    }
    const dataSet =
        type === 'bartending'
            ? bartendingPortfolioData
            : type === 'code'
            ? codePortfolioData
            : designPortfolioData;
    return dataSet;
}

function portfolioParamCheck(type: string | undefined) {
    if (type === undefined || (type !== 'bartending' && type !== 'code' && type !== 'design')) {
        return 1;
    }
    return 0;
}

export function loadPortfolio(type?: string) {
    const data = determineData(type);
    if (data === undefined || data === null) {
        return null;
    }
    return {
        info: data.info as PortfolioInfo,
        entries: data.entries.map((e) => e as PortfolioData),
    };
}

export function loadEntry(type?: string, entryId?: number) {
    const portfolio = loadPortfolio(type);
    if (portfolio === null || portfolio === undefined) {
        return null;
    }
    const currentEntry = portfolio.entries.find((entry) => entry.entryId === entryId);
    if (currentEntry === undefined) {
        return null;
    }
    return currentEntry;
}

export default function PortfolioDataLoader() {}
