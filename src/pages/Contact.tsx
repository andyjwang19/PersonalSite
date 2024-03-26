import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const imageStyle = 'w-72 transition sm:hover:grayscale';
    const linkStyle = 'text-2xl font-bold underline transition hover:scale-[1.1]';
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 font-sans text-lg sm:flex-row">
            <div className="flex snap-x gap-8 overflow-scroll px-16">
                <img src="images/andycontact.jpg" className={`${imageStyle} snap-center`} />
                <img src="images/andycontact2.jpg" className={`${imageStyle} snap-center`} />
            </div>
            <div className=" flex flex-col items-center gap-4">
                <div className="flex flex-col items-center pr-2 font-[new-spirit] text-6xl font-bold tracking-[-0.07em]">
                    <div>Andy</div> <div>Wang</div>
                </div>
                <a
                    className={linkStyle}
                    href={'https://linkedin.com/in/andyjwang19'}
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className={linkStyle}
                    href={'https://github.com/andyjwang19/'}
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                <Tooltip
                    anchorSelect="#email"
                    content="Copied!"
                    isOpen={isOpen}
                    // delayHide={1000}
                />
                <div
                    id="email"
                    className={`flex cursor-pointer items-center gap-1 text-2xl font-bold transition hover:scale-[1.1]`}
                    onClick={() => {
                        navigator.clipboard.writeText('andyjwang19@gmail.com');
                        setIsOpen(true);
                        setTimeout(() => setIsOpen(false), 1000);
                    }}
                >
                    andyjwang19@gmail.com <FaRegCopy />
                </div>
                <p>Based in New York!</p>
            </div>
        </div>
    );
}
