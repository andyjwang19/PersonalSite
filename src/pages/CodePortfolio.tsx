import { useEffect, useState } from 'react';

import codePortfolioData from '../data/codePortfolioData.json';
import Portfolio from '../Portfolio/Portfolio';

export default function CodePortfolio() {
    return (
        <Portfolio
            name={'Code'}
            filters={['frontend', 'fullstack', 'mobile']}
            blurb={'test'}
            data={codePortfolioData}
        />
    );
}
