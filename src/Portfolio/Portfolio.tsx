import { useEffect, useState } from 'react';

import Card from '../Portfolio/Card';
import codePortfolioData from '../data/codePortfolioData.json';
import CardEngine from './CardEngine';

interface PortfolioProps {
    name: string;
    filters: string[];
    blurb: string;
    data: { name: string; imgSlug: string; blurb: string }[];
}

export default function CodePortfolio({ name, filters, blurb, data }: PortfolioProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [filterState, setFilterState] = useState([false, false, false]);

    return (
        <div className="flex w-screen flex-grow flex-col items-center bg-background-lavender">
            <div className="ml-7 mb-12">
                <div className="z-10 flex items-center">
                    <div className="mr-36 flex-none font-sans text-[250px] font-medium leading-none tracking-[-0.1em]">
                        {name.toUpperCase()}
                    </div>
                    <div className={'flex flex-col'}>
                        {filters.map((f, idx) => (
                            <div
                                className={`relative z-10 shrink pr-1 pl-1 pb-1 font-sans text-5xl font-medium underline decoration-black ${
                                    filterState[idx] ? 'bg-black text-white' : ''
                                }`}
                                onClick={() =>
                                    setFilterState(filterState.map((x, i) => (i === idx ? !x : x)))
                                }
                            >
                                {f}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="-mt-12 text-start font-sans text-[250px] font-medium leading-none tracking-[-0.075em]">
                    PORTFOLIO
                </div>
            </div>
            <p className="mb-12 w-[500px] text-center font-sans text-xl font-medium">{blurb}</p>
            <div className="w-full ">
                <CardEngine data={codePortfolioData} />
                {/* {data.map((d) => {
                    return (
                        <Card
                            name={d.name.toUpperCase()}
                            blurb={d.blurb}
                            projectImageSlug={d.imgSlug}
                        />
                    );
                })} */}
            </div>
        </div>
    );
}
