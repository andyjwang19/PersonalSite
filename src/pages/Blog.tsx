import images from '../assets/index';
import React, { useCallback, useEffect, useState } from 'react';
import dataApi from '../api/dataApi';

function test() {
    return fetch('/api');
}
export default function Blog() {
    const [data, setData] = useState(null);
    const api = new dataApi();

    useEffect(() => {
        async function getDataLoaded() {
            const a = await api.getEntry('design', 3);
            if (a === null) {
                throw new Error('type or id wrong');
            }
            // const a = api.get();
            const res = await (await a).json();
            console.log(res);
            // setData(res.info);
        }
        if (!data) {
            getDataLoaded();
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {'« '}
                    <strong>{data}</strong>
                    {' »'}
                </p>
            </header>
        </div>
    );

    // return (
    //     <div className="flex h-full w-screen flex-row justify-between bg-background-lavender">
    //         <div className="h-full w-32 "></div>
    //         <div className="h-full w-full ">
    //             <div className="fixed mt-6 ml-2 origin-top-right -translate-x-full -rotate-90 font-sans text-[160px] font-bold leading-none tracking-tighter">
    //                 BLOG
    //             </div>
    //             <div className=""> UNDER CONSTRUCTION</div>
    //         </div>
    //         <div className="h-full w-32 "></div>
    //     </div>
    // );
}
