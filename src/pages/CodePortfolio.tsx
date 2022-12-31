import { useEffect, useState } from 'react';

import Card from '../Portfolio/Card';
import codePortfolioData from '../data/codePortfolioData.json';

export default function CodePortfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [frontendSelected, setFrontendSelected] = useState(false);
    const [fullstackSelected, setFullstackSelected] = useState(false);
    const [mobileSelected, setMobileSelected] = useState(false);

    return (
        <div className="flex w-screen flex-grow flex-col items-center bg-background-lavender">
            <div className="ml-7 mb-12">
                <div className="z-10 flex items-center">
                    <div className="mr-36 flex-none font-sans text-[250px] font-medium leading-none tracking-[-0.1em]">
                        CODE
                    </div>
                    <div className={'flex flex-col'}>
                        <button
                            className={`mr-24 flex-1 pr-1 pl-1 pb-1 font-sans text-5xl font-medium underline decoration-black ${
                                frontendSelected ? 'bg-black text-white' : ''
                            }`}
                            onClick={() => setFrontendSelected(!frontendSelected)}
                        >
                            frontend
                        </button>
                        <div
                            className={`mr-24 flex-1 pr-1 pl-1 pb-1 font-sans text-5xl font-medium underline decoration-black ${
                                fullstackSelected ? 'bg-black text-white' : ''
                            } `}
                            onClick={() => setFullstackSelected(!fullstackSelected)}
                        >
                            fullstack
                        </div>
                        <div
                            className={`relative z-10 shrink pr-1 pl-1 pb-1 font-sans text-5xl font-medium underline decoration-black ${
                                mobileSelected ? 'bg-black text-white' : ''
                            }`}
                            onClick={() => setMobileSelected(!mobileSelected)}
                        >
                            mobile
                        </div>
                    </div>
                </div>
                <div className="-mt-12 text-start font-sans text-[250px] font-medium leading-none tracking-[-0.075em]">
                    PORTFOLIO
                </div>
            </div>
            <p className="mb-12 w-[500px] text-center font-sans text-xl font-medium">
                Welcome to my design portfolio! I have on display here all my projects that showcase
                my technical skills and eye for design. Mainly, my technical skills lie in Figma,
                the Adobe Suite including Illustrator and InDesign, and Rhino. This page will be
                constantly updated with my new projects, so keep an eye out!
            </p>
            <div className="flex w-full flex-col ">
                {codePortfolioData.map((d) => {
                    return (
                        <Card
                            name={d.name.toUpperCase()}
                            blurb={d.blurb}
                            projectImageSlug={d.imgSlug}
                        />
                    );
                })}
            </div>
        </div>
    );
}
