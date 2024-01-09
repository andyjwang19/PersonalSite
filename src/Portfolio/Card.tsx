import { Link } from 'react-router-dom';
import skills from '../Models/skills';
import images from '../assets';
import { cardSizes } from './CardEngine';

interface CodeCardProps {
    entryId: number;
    name: string;
    // skills: skills[];
    blurb: string;
    imageSlug?: string;
    url?: string;
    size: cardSizes;
}

export default function Card({ entryId, name, blurb, imageSlug, url, size }: CodeCardProps) {
    console.log(`imageslug`, imageSlug);
    const adj = size === cardSizes.Small ? 'w-1/6' : size === cardSizes.Medium ? 'w-1/3' : 'w-1/2';
    const imgLocation =
        size === cardSizes.Small
            ? 'flex flex-col'
            : size === cardSizes.Medium
            ? 'flex flex-row'
            : 'flex flex-row';
    const imgTopMargin = size === cardSizes.Small ? 'mb-2' : 'ml-2 ';
    const clamp = size === cardSizes.Small ? 'line-clamp-4' : size === cardSizes.Medium ? '' : '';

    const imgSize =
        size === cardSizes.Small ? 'max-h-48' : size === cardSizes.Medium ? 'max-h-64' : 'max-h-64';
    return (
        <div className={`${adj} h-96 p-2`}>
            <Link
                className={`flex h-full w-full flex-col whitespace-normal break-words rounded-lg bg-white/50 p-2 font-sans font-medium transition duration-300 ease-in-out hover:scale-[1.03] hover:border-2 hover:border-stone-600 hover:bg-white/90 hover:p-1.5 `}
                to={entryId.toString()}
            >
                <div className="pb-2 text-center font-sans text-2xl tracking-tighter">{name}</div>
                <div className={`grow ${imgLocation}`}>
                    {/* <div className="flex w-screen flex-grow flex-col items-center bg-background-lavender"> */}
                    {imageSlug !== undefined ? (
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${
                                imageSlug.includes('.') ? imageSlug : imageSlug.concat('.png')
                            }`}
                            className={`mx-auto ${imgTopMargin} ${imgSize}`}
                            alt={imageSlug}
                        />
                    ) : null}
                    <div className={`ml-4 ${clamp}`}>{blurb}</div>
                </div>
            </Link>
        </div>
    );
}
