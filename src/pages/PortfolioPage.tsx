import { useParams } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import dataApi from '../api/dataApi';
import { useEffect, useState } from 'react';
import { CompletePortfolio } from '../Models/portfolio';
import dataFetch from '../api/dataFetch';

export default function PortfolioPage() {
    const params = useParams();
    // const api = new dataApi();
    const internalApi = new dataFetch();
    const [portfolioData, setPortfolioData] = useState<CompletePortfolio>();
    useEffect(() => {
        function loadData() {
            if (params.type !== undefined) {
                const val = internalApi.getPortfolio(params.type);
                if (val === null) {
                    throw new Error();
                }
                setPortfolioData(val);
            } else {
                throw new Error('No portfolio Type given in params');
            }
        }
        loadData();
    }, [window.location.pathname]);

    if (params.type === undefined) {
        return <div> 404 portfolio url incorrect</div>;
    }

    if (portfolioData === null) {
        return null;
    }
    return portfolioData ? (
        <Portfolio
            name={portfolioData.info.name}
            filters={portfolioData.info.filters}
            blurb={portfolioData.info.blurb}
            data={portfolioData.entries}
        />
    ) : null;
}
