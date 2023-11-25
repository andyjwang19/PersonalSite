import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import andycutout from '../assets/andycutout.png';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function Splash() {
    const [start, setStart] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setStart(true);
        }, 500);
    }, []);
    const { height, width } = useWindowDimensions();
    return (
        <div className="flex w-screen flex-grow flex-row overflow-hidden bg-background-lavender">
            {/* splash image and title */}
            <div className="fixed z-20 h-screen">
                <div
                    className={`transform] absolute top-[55px] left-[57px] h-[150] w-[131px] font-sans text-[100px] font-bold leading-[4.6875rem] tracking-tighter transition-transform duration-200	ease-out	${
                        start ? 'translate-x-0' : '-translate-x-52'
                    }`}
                >
                    hi! i'm
                </div>
                <div
                    className={`absolute top-[-92px] left-[205px] z-20 h-[150] w-[131px] font-sans text-[300px] font-bold tracking-[-0.1em] transition-transform delay-500 duration-200	ease-out	${
                        start ? 'translate-y-0' : '-translate-y-64'
                    }`}
                >
                    ANDY
                </div>
                <div
                    className={`absolute left-[-38px] top-[150px] h-[150] w-[131px] font-sans text-[300px] font-bold tracking-[-0.1em] transition-transform delay-[400ms] duration-[400ms]	ease-out	${
                        start ? 'translate-x-0' : '-translate-x-[1000px]'
                    }`}
                >
                    WANG
                </div>
                <div
                    className={`h-screen w-[900px] transition-transform delay-[800ms] duration-[400ms]	ease-out	${
                        start ? 'translate-y-0' : 'translate-y-[1000px]'
                    }`}
                >
                    <img
                        src={andycutout}
                        className={`absolute bottom-0 h-3/5 transition duration-300 ease-in-out hover:scale-110 `}
                    />
                </div>
                <div
                    className={`absolute bottom-[105px] left-[600px] flex h-[288px] w-12 flex-col justify-between transition-transform delay-[800ms] duration-[400ms]	ease-out	${
                        start ? 'translate-y-0' : 'translate-y-[1000px]'
                    }`}
                >
                    <Link to="/resume">
                        <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
                            RESUME
                        </div>
                    </Link>
                    <Link to="/portfolio/design">
                        <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
                            PORTFOLIOS
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
                            CONTACT
                        </div>
                    </Link>
                </div>
            </div>
            {/* self blurb */}
            <div
                className={`ml-[923px] transition-transform delay-[800ms] duration-[800ms]	ease-out	${
                    start ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="fixed z-10 h-16 w-full bg-gradient-to-b from-background-lavender to-transparent"></div>
                <p className="mt-[56px] mr-[40px] mb-12 font-sans text-5xl font-semibold">
                    &emsp; Welcome to my page! My name is Andy Wang and I am a current senior at
                    Columbia University studying Computer Science and Anthropology, currently
                    seeking a software engineering internship for the Summer of 2024. My academic
                    interests include design, human cultures, architecture, and frontend
                    development. <br />
                    <br /> I’ve worked at IBM Red Hat, a wonderful startup called The Vendry, a
                    agile startup team at Shade, and the Humans-and-Autonomy lab at Duke University.
                    I’ve gained a lot of experience in frontend and full-stack programming,
                    including React, building a CICD pipeline, and writing APIs. <br />
                    <br />
                    In my free time, I work as a freelance bartender with the Columbia Bartending
                    Agency and as the Recruiting Director of WKCR Radio. I work on graphic design
                    for RATROCK, the Arts Magazine at Columbia, as well as act as the Design
                    director for the Music Industry at Columbia Club. I also spend a day each
                    weekend working as a Sous Chef for Baci, a Supper Club started by students, for
                    students.
                </p>
            </div>
        </div>
    );
}
