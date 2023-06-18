import { useParams } from 'react-router-dom';
import bartendingPortfolioData from '../data/bartendingPortfolioData.json';
import codePortfolioData from '../data/codePortfolioData.json';
import designPortfolioData from '../data/designPortfolioData.json';
import Portfolio from '../Portfolio/Portfolio';

function determineData(type: string) {
    const dataSet =
        type === 'bartending'
            ? bartendingPortfolioData
            : type === 'code'
            ? codePortfolioData
            : designPortfolioData;
    return {
        name: dataSet.info.name,
        filters: dataSet.info.filters,
        blurb: dataSet.info.blurb,
        entries: dataSet.entries,
    };
}

export default function PortfolioPage() {
    const params = useParams();
    if (
        params.type === undefined ||
        (params.type !== 'bartending' && params.type !== 'code' && params.type !== 'design')
    ) {
        return <div>404 -- wrong portfolio url</div>;
    }
    const { name, filters, blurb, entries } = determineData(params.type);
    return <Portfolio name={name} filters={filters} blurb={blurb} data={entries} />;
}
