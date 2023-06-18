import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
    portfolioHover: boolean;
    setPortfolioHover: (arg0: boolean) => void;
}

function Header() {
    const [portfolioHover, setPortfolioHover] = useState<boolean>(false);

    const portfolioUnHoverStyle = 'flex h-full items-center font-sans text-[32px] font-bold';
    const portfolioHoverStyle =
        'flex h-full items-center font-sans text-[32px] font-bold bg-black text-white';
    const portfolioAnimated = `flex h-full items-center font-sans text-[32px] transition ease-in-out duration:500 font-bold hover:bg-black hover:text-white`;

    return (
        <div className="sticky top-0 z-20 flex h-[95px] w-full	items-center justify-between border-b border-black bg-header-orange">
            {portfolioHover ? (
                <div className="pointer-events-none absolute top-0 z-40 h-screen w-screen bg-black opacity-50"></div>
            ) : null}
            <Link
                className="align-center ml-[36px] inline-block font-sans text-8xl font-bold"
                to="/"
            >
                ANDY WANG
            </Link>
            <div className="flex h-full">
                <Link
                    className="flex h-full items-center font-sans text-[32px] font-bold"
                    to="/resume"
                >
                    <div
                        className={`border-r border-black pt-[15px] pb-[15px] pl-[20px] pr-[20px] `}
                    >
                        RESUME
                    </div>
                </Link>
                <div className="z-50" onMouseLeave={() => setPortfolioHover(false)}>
                    <div
                        className={portfolioAnimated}
                        // portfolioHover ? portfolioHoverStyle : portfolioUnHoverStyle}
                        onMouseEnter={() => setPortfolioHover(true)}
                    >
                        <div className="border-r border-black pt-[15px] pb-[15px] pl-[20px] pr-[20px] ">
                            PORTFOLIO
                        </div>
                    </div>
                    {/* mr-[103.5px]  */}
                    {portfolioHover ? (
                        <div className="absolute right-[164px] ">
                            <Link
                                className="flex h-24 w-[467px] items-center border border-white bg-black"
                                to="/portfolio/design"
                                onClick={() => setPortfolioHover(false)}
                            >
                                <p className="ml-5 align-middle font-sans text-2xl font-bold text-white">
                                    DESIGN PORTFOLIO
                                </p>
                            </Link>
                            <Link
                                className="right-[164px] flex h-24 w-[467px] items-center border border-white bg-black"
                                to="/portfolio/code"
                                onClick={() => setPortfolioHover(false)}
                            >
                                <p className="ml-5 align-middle font-sans text-2xl font-bold text-white">
                                    CODE PORTFOLIO
                                </p>
                            </Link>
                            <Link
                                className="right-[164px] flex h-24 w-[467px] items-center border border-white bg-black"
                                to="/portfolio/bartending"
                                onClick={() => setPortfolioHover(false)}
                            >
                                <p className="ml-5 align-middle font-sans text-2xl font-bold text-white">
                                    BARTENDING PORTFOLIO
                                </p>
                            </Link>
                        </div>
                    ) : null}
                </div>
                <Link
                    className="flex h-full items-center font-sans text-[32px] font-bold"
                    to="/blog"
                >
                    <div className="border-r border-black pl-[20px] pr-[20px] pt-[15px] pb-[15px] ">
                        BLOG
                    </div>
                </Link>
                <Link
                    className="flex h-full items-center font-sans text-[32px] font-bold"
                    to="/contact"
                >
                    <div className="pl-[20px] pr-[30px] ">CONTACT</div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
