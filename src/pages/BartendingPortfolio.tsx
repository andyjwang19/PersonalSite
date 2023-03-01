import bartendingPortfolioData from '../data/bartendingPortfolioData.json';
import Portfolio from '../Portfolio/Portfolio';

export default function BartendingPortfolio() {
    return (
        <Portfolio
            name={'Bartending'}
            filters={[]}
            blurb={` I also work as a freelance bartender, available for private events. I work primarily
                with the Columbia Bartending Agency, where I was licensed as a Distinguished
                Bartender, the highest certifcation. I have worked a variety of gigs, at a variety
                of venues, with a variety of setups. Shown here is some of my favorite gigs, many of
                which included designing a menu around a theme, and providing accurate shopping
                lists. If you would like to book me, you can reach out to me through the Contact
                link.  `}
            data={bartendingPortfolioData}
        />
    );
}
