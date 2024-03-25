import { CompletePortfolio, PortfolioData } from '../Models/portfolio';
import bartendingPortfolioData from './data/bartendingPortfolioData.json';
import codePortfolioData from './data/codePortfolioData.json';
import designPortfolioData from './data/designPortfolioData.json';

export default class dataFetch {
    constructor() {}

    get() {}

    getPortfolio(type: string): CompletePortfolio {
        // if (portfolioParamCheck(type)) {
        //     throw new Error('Invalid Portfolio Type');
        // }
        if (type === 'code') return codePortfolioData;
        // else if (type === 'code') return codePortfolioData;
        // else if (type === 'design') return designPortfolioData;
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

    getEntry(type?: string, entryId?: number): PortfolioData {
        if (!type || !entryId) {
            throw new Error();
        }
        const port = this.getPortfolio(type);
        const res = port.entries.find((entry) => entry.entryId === entryId);
        if (res === undefined) {
            throw new Error();
        }
        return res;
        // return fetch(`${root}/portfolio/${type}/${entryId}`);
    }
}
