import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import images from '../assets';
import dataApi from '../api/dataApi';
import { PortfolioData } from '../Models/portfolio';

export default function InfoPage() {
    const params = useParams();
    const [entry, setEntry] = useState<PortfolioData>();
    const [loading, setLoading] = useState(1);
    const api = new dataApi();
    useEffect(() => {
        window.scrollTo(0, 0);
        async function load() {
            const entry = await api.getEntry(
                params.type,
                parseInt(params.entryId ? params.entryId : '')
            );
            if (entry === null) {
                throw new Error('Invalid type or id');
            }

            setEntry(await entry.json());
            setLoading(0);
        }
        if (!entry) {
            load();
        }
    }, []);
    // const tmp = await api.getEntry(params.type, parseInt(params.entryId ? params.entryId : ''));
    // if (tmp === null) {
    //     throw new Error('Invalid type or id');
    // }

    // const entry = await tmp.json();
    if (loading) {
        return (
            <div className="flex h-screen w-screen justify-center bg-background-lavender font-sans font-bold">
                LOADING...
            </div>
        );
    }
    if (entry === null || entry === undefined) {
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
