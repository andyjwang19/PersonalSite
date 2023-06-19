import React from 'react';
import images from '../assets/index';

export default function Blog() {
    return (
        <div className="flex h-full w-screen flex-row justify-between bg-background-lavender">
            <div className="h-full w-32 "></div>
            <div className="h-full w-full ">
                <div className="fixed mt-6 ml-2 origin-top-right -translate-x-full -rotate-90 font-sans text-[160px] font-bold leading-none tracking-tighter">
                    BLOG
                </div>
                <div className=""> UNDER CONSTRUCTION</div>
            </div>
            <div className="h-full w-32 "></div>
        </div>
    );
}
