import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import images from '../assets';
import { loadEntry } from '../loaders/PortfolioDataLoader';

export default function InfoPage() {
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const entry = loadEntry(params.type, parseInt(params.entryId ? params.entryId : ''));

    if (entry === null) {
        return <div> 404 Entry id does not exist</div>;
    }
    const firstWord = entry.name.split(' ')[0];
    const remainingTitle = entry.name.split(' ').slice(1).join(' ');

    return (
        <div className="flex w-screen flex-grow flex-col items-center bg-background-lavender">
            <div className="flex w-full flex-row flex-nowrap ">
                <div className="mr-36 flex-none justify-start font-sans text-[250px] font-medium leading-[12rem] tracking-[-0.1em]">
                    {firstWord}
                </div>
                {entry.url ? (
                    <div className="mr-16 flex flex-col justify-center ">
                        <div className="bg-black p-2 font-sans text-4xl font-bold tracking-tighter text-white transition duration-300 ease-in-out hover:scale-105">
                            <a href={entry.url} target="_blank" rel="noreferrer">
                                Link to Project
                            </a>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="mb-14 w-full flex-wrap font-sans text-[250px] font-medium leading-[12rem] tracking-[-0.1em]">
                {remainingTitle}
            </div>
            {entry.imgSlug ? (
                <div className="mb-12">
                    <img
                        src={images.get(entry.imgSlug)}
                        alt={entry.imgSlug}
                        className="ml-[92px] w-2/6 bg-white"
                    />
                </div>
            ) : null}
            <div className="mr-40 mb-12 ml-40 font-sans text-3xl font-medium">{entry.blurb}</div>
        </div>
    );
}
