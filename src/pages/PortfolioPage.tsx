import { useParams } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import dataApi from '../api/dataApi';
import { useEffect, useState } from 'react';
import { CompletePortfolio } from '../Models/portfolio';

export default function PortfolioPage() {
    const params = useParams();
    const api = new dataApi();
    const [portfolioData, setPortfolioData] = useState<CompletePortfolio>();
    useEffect(() => {
        async function loadData() {
            const val = await api.getPortfolio(params.type);
            if (val === null) {
                throw new Error();
            }
            setPortfolioData(await val.json());
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
