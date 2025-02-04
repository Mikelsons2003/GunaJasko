import React from "react";
import PrivatumaPolitikaImg from '../../img/PrivatumaPolitikaImg.webp';
import { useTranslation } from "react-i18next";
import LazyBackground from "./LazyBackground";

function PrivatumaPolitika() {
    const {t} = useTranslation();
    return (
        <div className="mx-auto font-sans text-white bg-[#FBF8FB]">
            <div className="font-sans text-[#5B3767] bg-[#5B3767] py-10 lg:h-[761px]">
                {/* Content Section */}
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-6 sm:px-8">
                    {/* Left: Text Section */}
                    <div className="w-full lg:w-1/2 mt-20 md:mt-32 lg:mt-48 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl text-[#CDC697]">{t("politika.h1Politika")}</h1>
                    </div>

                    {/* Right: Image Section */}
                    <LazyBackground
                        image={PrivatumaPolitikaImg}
                        className="w-full lg:w-[704px] h-[300px] sm:h-[400px] lg:h-[469px] flex-shrink-0 mt-8 lg:mt-48"
                    >
                    </LazyBackground>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-8 py-10 text-[#5B3767]">
                <p className="text-left text-sm sm:text-md leading-relaxed">
                    {t("politika.pPolitika")}
                    <a
                        href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG
                    </a>
                    )
                </p>
            </div>
        </div>
    );
}

export default PrivatumaPolitika;
