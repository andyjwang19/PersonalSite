import { Link } from 'react-router-dom';
import skills from '../Models/skills';
import images from '../assets';
import { cardSizes } from './CardEngine';

interface CodeCardProps {
    name: string;
    // skills: skills[];
    blurb: string;
    imageSlug?: string;
    url?: string;
    size: cardSizes;
}

export default function Card({ name, blurb, imageSlug, url, size }: CodeCardProps) {
    const adj = size === cardSizes.Small ? 'w-1/6' : size === cardSizes.Medium ? 'w-1/3' : 'w-1/2';
    const imgLocation =
        size === cardSizes.Small
            ? ''
            : size === cardSizes.Medium
            ? 'flex flex-row'
            : 'flex flex-row';
    const imgTopMargin = size === cardSizes.Small ? 'mb-2' : 'ml-2 mt-12';
    return (
        <a
            className={`m-2 h-96 whitespace-normal break-words rounded-lg bg-white/50 p-2 font-sans font-medium transition duration-300 ease-in-out hover:scale-[1.03] hover:border-2 hover:border-stone-600 hover:bg-white/90 hover:p-1.5 ${adj}`}
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <div className="mb-2 text-center font-sans text-2xl tracking-tighter">{name}</div>
            <div className={`h-full ${imgLocation}`}>
                {/* <div className="flex w-screen flex-grow flex-col items-center bg-background-lavender"> */}
                {imageSlug !== undefined ? (
                    <img
                        src={images.get(imageSlug as string)}
                        className={`mx-auto ${imgTopMargin} h-48`}
                    />
                ) : null}
                <div className="ml-4">{blurb}</div>
            </div>
        </a>
    );
}
