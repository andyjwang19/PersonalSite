import { useEffect, useState } from 'react';
import images from '../assets';

interface InfoPageProps {
    name: string;
    blurb: string;
    // more images in future
    projectImageSlug: string;
}

export default function InfoPage({ name, blurb, projectImageSlug }: InfoPageProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="">{name}</div>
            <div className="">
                <img
                    src={images.get(projectImageSlug)}
                    alt={projectImageSlug}
                    className="ml-[92px] w-64 bg-white"
                />
            </div>
            <div className="">{blurb}</div>
        </div>
    );
}
