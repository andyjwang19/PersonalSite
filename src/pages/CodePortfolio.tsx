import { useEffect, useState } from 'react';

import codePortfolioData from '../data/codePortfolioData.json';
import Portfolio from '../Portfolio/Portfolio';

export default function CodePortfolio() {
    return (
        <Portfolio
            name={'Code'}
            filters={['frontend', 'fullstack', 'mobile']}
            blurb={`UNDER CONSTRUCTION, IMAGES ON THE WAY:
            This is a collection of all the software development and computer science work I have done. 
            A lot of my experience lies in React and Typescript, writing frontend and full-stack code. 
            To see my work in design, take a look at my Design Portfolio!`}
            data={codePortfolioData}
        />
    );
}
