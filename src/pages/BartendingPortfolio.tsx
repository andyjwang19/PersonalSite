import { useEffect, useState } from 'react';

import Card from '../Portfolio/Card';
import bartendingPortfolioData from '../data/bartendingPortfolioData.json';

export default function BartendingPortfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex w-screen flex-grow flex-col items-center bg-background-lavender">
            <div className="ml-7 mb-12">
                <div className="z-10 flex items-center">
                    <div className="mr-36 flex-none font-sans text-[250px] font-medium leading-none tracking-[-0.1em]">
                        BARTENDING
                    </div>
                </div>
                <div className="-mt-12 text-start font-sans text-[250px] font-medium leading-none tracking-[-0.075em]">
                    PORTFOLIO
                </div>
            </div>
            <p className="mb-12 w-[500px] text-center font-sans text-xl font-medium">
                I also work as a freelance bartender, available for private events. I work primarily
                with the Columbia Bartending Agency, where I was licensed as a Distinguished
                Bartender, the highest certifcation. I have worked a variety of gigs, at a variety
                of venues, with a variety of setups. Shown here is some of my favorite gigs, many of
                which included designing a menu around a theme, and providing accurate shopping
                lists. If you would like to book me, you can reach out to me through the Contact
                link.
            </p>
            <div className="flex w-full flex-col ">
                {bartendingPortfolioData.map((d) => {
                    return (
                        <Card
                            name={d.title.toUpperCase()}
                            blurb={d.blurb}
                            projectImageSlug={d.imgSlug}
                        />
                    );
                })}
            </div>
        </div>
    );
}
