// const root = 'https://localhost:8000';
const root = 'https://3.145.214.116:8000';
export default class dataApi {
    constructor() {
        const path = `${root}`;
    }

    get() {
        return fetch(`${root}/api`);
    }

    async getPortfolio(type?: string) {
        //Promise<{ portfolio: CompletePortfolio }> {
        if (!type) {
            return null;
        }
        const tmp = await fetch(`${root}/portfolio/${type}`);
        console.log(`tmp`, tmp);
        return tmp;
    }

    getEntry(type?: string, entryId?: number) {
        if (!type || !entryId) {
            return null;
        }
        return fetch(`${root}/portfolio/${type}/${entryId}`);
    }
}
