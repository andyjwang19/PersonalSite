import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import andy3 from '../assets/andy_3.png';
import andy_bass from '../assets/andy_bass.png';
import andy_bass_full from '../assets/andy_4.png';
import andy_full from '../assets/andy_1.png';

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
    enum splashState {
        loading,
        first,
        second,
    }
    const [start, setStart] = useState<splashState>(splashState.loading);
    const [animating, setAnimating] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setStart(splashState.first);
            setAnimating(true);
        }, 500);
        setTimeout(() => {
            setAnimating(false);
        }, 2000);
    }, []);
    // const { height, width } = useWindowDimensions();
    return (
        <div className="fixed h-screen w-screen bg-background-lavender">
            {/* splash image and title */}
            <div className="fixed h-screen w-screen font-[new-spirit]">
                <div
                    className={`absolute top-8 left-1/2 h-[100px] w-[131px] transform text-5xl font-bold leading-[3rem] tracking-tighter transition-transform duration-200 ease-out sm:top-[40px] sm:left-[30px] sm:text-right xl:text-[95px] xl:leading-[5rem]	${
                        start === splashState.first
                            ? '-translate-x-[20px] sm:translate-x-0 '
                            : start === splashState.second
                            ? '-translate-y-[300px]'
                            : '-translate-x-[500px]'
                    }`}
                >
                    hi! i'm
                </div>
                <div
                    className={
                        `absolute top-24 left-1/2  text-[125px] font-semibold  tracking-[-0.07em] sm:top-[-110px]  sm:left-[205px] sm:text-[200px] xl:top-[-110px] xl:text-[280px] ` +
                        `transition-all duration-200 ease-out ` +
                        `${animating ? 'delay-500' : ''} ` +
                        `${
                            start === splashState.first
                                ? '-translate-x-1/2 translate-y-0 sm:-translate-x-0'
                                : start === splashState.second
                                ? '-translate-x-1/2 -translate-y-20 sm:translate-y-[150px] sm:-translate-x-[150px] sm:text-[90px] xl:text-[90px] '
                                : '-translate-y-96'
                        }`
                    }
                >
                    Andy
                </div>
                <div
                    className={
                        `absolute top-48 left-1/2 text-[135px] font-semibold tracking-[-0.07em] sm:left-[-45px] sm:top-[120px] sm:text-[200px] xl:text-[280px] ` +
                        `${
                            animating
                                ? 'transition-all delay-200 duration-[400ms] ease-out'
                                : 'transition-all duration-200 ease-out'
                        } ` +
                        `${
                            start === splashState.first
                                ? '-translate-x-1/2 sm:-translate-x-0'
                                : start === splashState.second
                                ? '-translate-x-1/2 -translate-y-20 sm:translate-y-0 sm:-translate-x-0 sm:translate-x-[80px] sm:text-[90px] xl:text-[90px] '
                                : '-translate-x-[1000px]'
                        }`
                    }
                >
                    Wang
                </div>
            </div>
            {/* <div
                className={`h-screen w-[900px] overflow-hidden transition-transform delay-[800ms] duration-[400ms]	ease-out	${
                    start ? 'translate-y-0' : 'translate-y-[1000px]'
                }`}
            > */}
            <div className={`h-screen overflow-hidden`}>
                <img
                    src={andy_full}
                    alt={'Andy Wang in a blue shirt.'}
                    className={
                        `auto fixed left-[-100px] bottom-[-250px] max-h-full origin-bottom-left scale-[1] object-scale-down sm:left-8  sm:bottom-[-350px] sm:scale-[1.05] xl:bottom-[-400px] ` +
                        `${
                            animating
                                ? 'transition-transform delay-[700ms] duration-[400ms] ease-out  '
                                : ''
                        } ` +
                        `${start === splashState.first ? 'translate-y-0' : 'translate-y-[1500px]'}`
                    }
                />
                <img
                    src={andy_bass_full}
                    alt={'Andy Wang playing the bass in a black shirt'}
                    className={
                        `auto pointer-events-none fixed bottom-0 right-[-150px] z-10 origin-bottom-right scale-[1.5] sm:right-[-50px] sm:-z-10 sm:max-h-full sm:scale-[1.1] sm:object-scale-down` +
                        `transition-transform delay-[400ms] duration-[400ms] ease-out  ` +
                        `${
                            start === splashState.first
                                ? 'translate-x-0'
                                : start === splashState.second
                                ? 'sm:scale-1 right-[-75px] scale-[.9] sm:-translate-x-3/4'
                                : 'translate-x-[1100px]'
                        }`
                    }
                />
            </div>
            <div
                className={
                    `fixed bottom-36 left-1/2 z-20 -translate-x-1/2 cursor-pointer border-[3px] border-black bg-header-orange px-[86px] pt-[10px] pb-[12px] text-center font-sans text-5xl font-bold tracking-tighter drop-shadow-heavy hover:scale-[1.1] sm:bottom-48 ` +
                    `${
                        animating
                            ? `transition-transform delay-[700ms] duration-[700ms] ease-out  `
                            : 'transition-transform duration-[200ms] ease-out'
                    } ` +
                    `${start === splashState.first ? 'translate-y-0 ' : 'translate-y-[400px]'}`
                }
                onClick={() => {
                    setStart(splashState.second);
                    // setAnimating(true);
                }}
            >
                enter!
            </div>

            <div
                className={
                    `absolute top-64 left-[50px] flex h-[288px] w-12 flex-col justify-between ` +
                    `transition-transform delay-[800ms] duration-[400ms]	ease-out ` +
                    `${
                        start === splashState.second
                            ? '-translate-x-[1000px] sm:translate-x-0 '
                            : '-translate-x-[1000px]'
                    }`
                }
            >
                <Link to="/resume">
                    <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
                        RESUME
                    </div>
                </Link>
                <Link to="/portfolio/code">
                    <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
                        PORTFOLIO
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
                        CONTACT
                    </div>
                </Link>
            </div>

            <div
                className={
                    `fixed top-80 right-0 h-3/4 overflow-y-scroll sm:top-0  sm:h-full sm:w-1/2 ` +
                    `mx-8 flex flex-col pb-20 ` +
                    'transition-transform delay-[800ms] duration-[400ms] ease-out ' +
                    `${start === splashState.second ? 'translate-x-0' : 'translate-x-[900px]'}`
                }
            >
                <p className="font-sans text-3xl font-semibold sm:mt-[70px] sm:mr-[45px] sm:mb-12 sm:pb-48 sm:text-5xl">
                    Welcome to my page! My name is Andy Wang and I am a current senior at Columbia
                    University studying Computer Science and Anthropology, currently seeking a full
                    time software engineering role starting in the Summer of 2024. My academic
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
                <Link to="/portfolio/code" className="block sm:hidden">
                    <div className="mt-6 mb-60 h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
                        PORTFOLIO
                    </div>
                </Link>
            </div>
            <div className="fixed top-16 right-16 font-[new-spirit] underline opacity-0 sm:opacity-30">
                Log in
            </div>
        </div>
    );
}
// function oldSplash() {
//     const [start, setStart] = useState(false);
//     useEffect(() => {
//         window.scrollTo(0, 0);
//         setTimeout(() => {
//             setStart(true);
//         }, 500);
//     }, []);
//     const { height, width } = useWindowDimensions();
//     return (
//         <div className="flex w-screen flex-grow flex-row overflow-hidden bg-background-lavender">
//             {/* splash image and title */}
//             <div className="fixed z-20 h-screen font-[new-spirit]">
//                 <div
//                     className={`transform] absolute top-[35px] left-[30px] h-[150] w-[131px]  text-[100px] font-bold leading-[5rem] tracking-tighter transition-transform duration-200	ease-out	${
//                         start ? 'translate-x-0' : '-translate-x-52'
//                     }`}
//                 >
//                     hi! i'm
//                 </div>
//                 <div
//                     className={`absolute top-[-100px] left-[175px] z-20 h-[150] w-[131px]  text-[300px] font-bold tracking-[-0.1em] transition-transform delay-500 duration-200	ease-out	${
//                         start ? 'translate-y-0' : '-translate-y-96'
//                     }`}
//                 >
//                     Andy
//                 </div>
//                 <div
//                     className={`absolute left-[-58px] top-[130px] h-[150] w-[131px]  text-[300px] font-bold tracking-[-0.1em] transition-transform delay-[400ms] duration-[400ms]	ease-out	${
//                         start ? 'translate-x-0' : '-translate-x-[1000px]'
//                     }`}
//                 >
//                     Wang
//                 </div>
//                 <div
//                     className={`h-screen w-[900px] transition-transform delay-[800ms] duration-[400ms]	ease-out	${
//                         start ? 'translate-y-16' : 'translate-y-[1000px]'
//                     }`}
//                 >
//                     <img
//                         src={andycutout}
//                         className={`absolute bottom-0 h-3/5 transition duration-300 ease-in-out hover:opacity-50 `}
//                     />
//                 </div>
//                 <div
//                     className={`absolute bottom-[105px] left-[600px] flex h-[288px] w-12 flex-col justify-between transition-transform delay-[800ms] duration-[400ms]	ease-out	${
//                         start ? 'translate-y-0' : 'translate-y-[1000px]'
//                     }`}
//                 >
//                     <Link to="/resume">
//                         <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
//                             RESUME
//                         </div>
//                     </Link>
//                     <Link to="/portfolio/code">
//                         <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
//                             PORTFOLIOS
//                         </div>
//                     </Link>
//                     <Link to="/contact">
//                         <div className="h-[68px] w-[234px] border-[3px] border-black bg-header-orange pt-[10px] text-center font-sans text-4xl font-bold tracking-tighter drop-shadow-heavy transition duration-150 ease-in-out hover:scale-110">
//                             CONTACT
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//             {/* self blurb */}
//             <div
//                 className={`ml-[923px] transition-transform delay-[800ms] duration-[800ms]	ease-out	${
//                     start ? 'translate-y-0' : 'translate-y-full'
//                 }`}
//             >
//                 <div className="fixed z-10 h-16 w-full bg-gradient-to-b from-background-lavender to-transparent"></div>
//                 <p className="mt-[70px] mr-[45px] mb-12 font-sans text-5xl font-semibold">
//                     &emsp; Welcome to my page! My name is Andy Wang and I am a current senior at
//                     Columbia University studying Computer Science and Anthropology, currently
//                     seeking a software engineering internship for the Summer of 2024. My academic
//                     interests include design, human cultures, architecture, and frontend
//                     development. <br />
//                     <br /> I’ve worked at IBM Red Hat, a wonderful startup called The Vendry, a
//                     agile startup team at Shade, and the Humans-and-Autonomy lab at Duke University.
//                     I’ve gained a lot of experience in frontend and full-stack programming,
//                     including React, building a CICD pipeline, and writing APIs. <br />
//                     <br />
//                     In my free time, I work as a freelance bartender with the Columbia Bartending
//                     Agency and as the Recruiting Director of WKCR Radio. I work on graphic design
//                     for RATROCK, the Arts Magazine at Columbia, as well as act as the Design
//                     director for the Music Industry at Columbia Club. I also spend a day each
//                     weekend working as a Sous Chef for Baci, a Supper Club started by students, for
//                     students.
//                 </p>
//             </div>
//         </div>
//     );
// }
