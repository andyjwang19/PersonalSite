import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/index';

const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('resume.pdf').then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        });
    });
};

export default function Resume() {
    return (
        <div className="flex w-screen flex-grow flex-row items-center bg-background-lavender">
            <div className="sticky h-full w-[700px]">
                <div className="fixed mt-6 ml-2 origin-top-right -translate-x-full -rotate-90 font-sans text-[160px] font-bold leading-none tracking-tighter">
                    RESUME
                </div>
                <div className="fixed ml-60 flex flex-col">
                    <p className="mt-6 w-[430px] font-sans text-4xl font-bold tracking-tighter">
                        what you will find here is a concise summation of the work I have done, the
                        classes I have taken, and the experience I have gained in a variety of
                        topics and skills. For a fuller understanding of specific elements, refer to
                        the Portfolio section of this site.
                    </p>
                    <div className="mt-[61px] flex w-[370px] flex-row justify-between	">
                        <Link className="" to="/codeportfolio">
                            <div className="h-[102px] w-[174px] bg-black pl-2 pt-2 font-sans text-4xl font-bold tracking-tighter text-white drop-shadow-heavy">
                                code portfolio
                            </div>
                        </Link>
                        <Link className="" to="/designportfolio">
                            <div className="h-[102px] w-[174px] bg-white pl-2 pt-2 font-sans text-4xl font-bold tracking-tighter text-black drop-shadow-heavy">
                                design portfolio
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-[60px] flex grow flex-col items-center ">
                <img src={images.get('resume')}></img>
                <a
                    className="mt-6 h-[50px] w-[230px] bg-header-orange pt-1 text-center font-sans text-4xl font-bold tracking-tighter text-black drop-shadow-heavy"
                    href="https://github.com/andyjwang19/Resume/blob/main/23_resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    download pdf
                </a>
                <div className="h-[60px]" />
            </div>
        </div>
    );
}
