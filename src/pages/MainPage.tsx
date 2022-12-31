import React from 'react';
import andy from '../assets/andy.png';

function MainPage() {
    return (
        <div className="-z-50 flex w-screen flex-grow items-center bg-background-lavender">
            <div className="mb-12 flex">
                <img src={andy} alt="Andy" className="ml-36" />

                <div className="ml-44 flex flex-col">
                    <p className="w-[764px] font-sans text-4xl font-bold">
                        ANDY (HE/HIM) IS A CURRENT JUNIOR AT COLUMBIA UNIVERSITY STUDYING COMPUTER
                        SCIENCE AND ANTHROPOLOGY, CURRENTLY SEEKING A SOFTWARE ENGINEERING
                        INTERNSHIP FOR SUMMER 23. HIS ACADEMIC INTERESTS INCLUDE DESIGN, HUMAN
                        CULTURES, AND ARCHITECTURE. <br></br>
                        <br></br>HE IS A DISTINGUISHED BARTENDER WITH THE COLUMBIA BARTENDING AGENCY
                        AND THE RECRUITING DIRECTOR FOR WKCR RADIO.{' '}
                    </p>
                    <div className="mt-12 flex w-[764px] justify-between">
                        <div className="h-14 w-44 bg-black pt-1 text-center font-sans text-4xl font-medium text-white">
                            email
                        </div>
                        <div className="h-14 w-44 bg-black pt-1 text-center font-sans text-4xl font-medium text-white">
                            github
                        </div>
                        <div className="h-14 w-44 bg-black pt-1 text-center font-sans text-4xl font-medium text-white">
                            linkedin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
