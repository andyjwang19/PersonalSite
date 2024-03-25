import { useEffect, useState } from 'react';

import Card from '../Portfolio/Card';
import CardEngine from './CardEngine';
import { PortfolioData } from '../Models/portfolio';

interface PortfolioProps {
    name: string;
    filters: string[];
    blurb: string;
    data: PortfolioData[];
}

export default function Portfolio({ name, filters, blurb, data }: PortfolioProps) {
    const [filterState, setFilterState] = useState([false, false, false]);
    const [currentEntry, setCurrentEntry] = useState<PortfolioData>();
    const textStyle = 'font-sans leading-none tracking-[-0.075em] ';
    const MainMenu = () => (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex w-full justify-center">
                <div className="ml-4 hidden h-full grow bg-blue-200 pt-4 sm:inline">
                    <Selected />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div
                        className={
                            `${textStyle} text-nowrap sm:text-wrap mt-4 mb-4 w-full flex-none px-4 text-4xl font-medium min-[380px]:text-6xl sm:mt-0 sm:text-right sm:text-8xl ` +
                            `flex justify-center gap-4 sm:flex-col sm:gap-0`
                        }
                    >
                        <div>Code</div> <div className="leading-[55px]">Projects</div>
                    </div>
                    <div className={`flex w-full flex-none gap-4 px-8 sm:flex-col`}>
                        <div
                            className={`${textStyle} border-1 my-auto ml-auto shrink-0 grow-0 border border-black bg-header-orange px-8 py-6 text-2xl font-black sm:order-last`}
                        >
                            other work...
                        </div>
                        <div className="grid w-full justify-items-end">
                            {filters.map((f, idx) => (
                                <div
                                    className={`relative z-10 shrink pr-1 pl-1 font-sans text-2xl font-medium underline decoration-black ${
                                        filterState[idx] ? 'bg-black text-white' : ''
                                    }`}
                                    onClick={() =>
                                        setFilterState(
                                            filterState.map((x, i) => (i === idx ? !x : x))
                                        )
                                    }
                                >
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-4 flex w-full grow gap-4 overflow-scroll px-4 ">
                {data.map((portfolioEntry) => {
                    const imageSlug = `${
                        portfolioEntry.imgSlugs.length > 0
                            ? portfolioEntry.imgSlugs[0]
                            : 'placeholder.png'
                    }`;
                    return (
                        // <span className={`h-full w-40 flex-none rounded-t-2xl ${imageSlug}`}>
                        //     {imageSlug}
                        // </span>
                        <span
                            className="group relative flex flex-none cursor-pointer items-center justify-center "
                            onClick={() => {
                                setCurrentEntry(portfolioEntry);
                            }}
                        >
                            <div className="relative h-full w-52 grow-0 brightness-50 transition group-hover:opacity-20">
                                <img
                                    src={`../images/${imageSlug}`}
                                    className="absolute h-full w-full rounded-t-2xl object-cover"
                                    alt={imageSlug}
                                />
                            </div>
                            <div
                                className={`group absolute ${textStyle} text-center text-3xl font-medium text-white`}
                            >
                                {portfolioEntry.name}
                            </div>
                        </span>
                    );
                })}
            </div>
        </div>
    );

    const Selected = () => {
        if (currentEntry === undefined) {
            return <div></div>;
        }
        return (
            <div className="flex h-full w-full flex-col items-center overflow-scroll">
                <div className="mt-4 flex w-full flex-none gap-4 px-4 ">
                    <div
                        className={`${textStyle} border-1 my-auto shrink-0 border border-black bg-header-orange px-6 py-2 text-2xl font-black`}
                        onClick={() => setCurrentEntry(undefined)}
                    >
                        back
                    </div>
                    <div className={`${textStyle} text-center text-4xl font-medium `}>
                        {currentEntry.name}
                    </div>
                </div>
                <div className="mt-4 flex h-[50vh] w-full flex-none flex-row gap-4 overflow-x-auto px-4">
                    {currentEntry.imgSlugs.map((imgSlug) => {
                        return (
                            <img
                                key={imgSlug}
                                // src={images.get(imgSlug)}
                                src={`../images/${imgSlug}`}
                                alt={imgSlug}
                                className="max-h-full max-w-[2500px] grow bg-white object-cover"
                            />
                        );
                    })}
                </div>
                <p className={`${textStyle} m-4 h-36 text-4xl font-medium`}>{currentEntry.blurb}</p>
            </div>
        );
    };

    return (
        <>
            <div className="block h-full sm:hidden">
                {currentEntry ? <Selected /> : <MainMenu />}
            </div>
            <div className="hidden h-full sm:block">{<MainMenu />}</div>
        </>
    );
}
// export default function Portfolio({ name, filters, blurb, data }: PortfolioProps) {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const [filterState, setFilterState] = useState([false, false, false]);

//     return (
//         <div className="flex w-screen flex-grow flex-col items-center bg-background-lavender">
//             <div className="ml-7 mb-12">
//                 <div className="z-10 flex items-center">
//                     <div className="mr-36 flex-none font-sans text-[250px] font-black leading-none tracking-[-0.1em]">
//                         {name.toUpperCase()}
//                     </div>
//                     <div className={'flex flex-col'}>
//                         {filters.map((f, idx) => (
//                             <div
//                                 className={`relative z-10 shrink pr-1 pl-1 pb-1 font-sans text-5xl font-medium underline decoration-black ${
//                                     filterState[idx] ? 'bg-black text-white' : ''
//                                 }`}
//                                 onClick={() =>
//                                     setFilterState(filterState.map((x, i) => (i === idx ? !x : x)))
//                                 }
//                             >
//                                 {f}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="-mt-12 text-start font-sans text-[250px] font-black leading-none tracking-[-0.075em]">
//                     PORTFOLIO
//                 </div>
//             </div>
//             <p className="mb-12 w-[500px] text-center font-sans text-xl font-medium">{blurb}</p>
//             <div className="w-full ">
//                 <CardEngine data={data} />
//             </div>
//         </div>
//     );
// }
