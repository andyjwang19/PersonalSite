import { CompletePortfolio } from '../Models/portfolio';
import bartendingPortfolioData from './data/bartendingPortfolioData.json';
import codePortfolioData from './data/codePortfolioData.json';
import designPortfolioData from './data/designPortfolioData.json';

export default class dataFetch {
    constructor() {}

    get() {}

    getPortfolio(type: string) {
        // if (portfolioParamCheck(type)) {
        //     throw new Error('Invalid Portfolio Type');
        // }
        if (type === 'bartending') return bartendingPortfolioData;
        else if (type === 'code') return codePortfolioData;
        else if (type === 'design') return designPortfolioData;
        else {
            throw new Error('Invalid Portfolio Type');
        }

        // const dataPath = `api/data/${type}PortfolioData.json`;
        // console.log('WORKIGN', type);
        // fs.readFile(dataPath, 'utf8', (err: Error, data: string) => {
        //     if (err) {
        //         throw err;
        //     }

        //     setPortfolioData(JSON.parse(data));
        // });
    }

    getEntry(type?: string, entryId?: number) {
        if (!type || !entryId) {
            return null;
        }
        const port = this.getPortfolio(type);
        return port.entries.find((entry) => entry.entryId === entryId);
        // return fetch(`${root}/portfolio/${type}/${entryId}`);
    }
}
