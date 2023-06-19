import { useParams } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import { loadPortfolio } from '../loaders/PortfolioDataLoader';

export default function PortfolioPage() {
    const params = useParams();
    if (params.type === undefined) {
        return <div> 404 portfolio url incorrect</div>;
    }
    const portfolioData = loadPortfolio(params.type);
    if (portfolioData === null) {
        return null;
    }
    return (
        <Portfolio
            name={portfolioData.info.name}
            filters={portfolioData.info.filters}
            blurb={portfolioData.info.blurb}
            data={portfolioData.entries}
        />
    );
}
