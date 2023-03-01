import designPortfolioData from '../data/designPortfolioData.json';
import Portfolio from '../Portfolio/Portfolio';

export default function DesignPortfolio() {
    return (
        <Portfolio
            name={'Design'}
            filters={['architecture', 'graphic', 'ui']}
            blurb={` UNDER CONSTRUCTION, IMAGES ON THE WAY:
                Welcome to my design portfolio! I have on display here all my projects that showcase
                my technical skills and eye for design. Mainly, my technical skills lie in Figma,
                the Adobe Suite including Illustrator and InDesign, and Rhino. This page will be
                constantly updated with my new projects, so keep an eye out!`}
            data={designPortfolioData}
        />
    );
}
