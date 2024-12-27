import React from "react";
import PrivatumaPolitikaImg from '../../img/PrivatumaPolitikaImg.png';

function PrivatumaPolitika() {
    return (
        <div className="mx-auto font-sans text-white bg-[#FBF8FB]">
            <div className="font-sans text-[#5B3767] bg-[#5B3767] py-10 lg:h-[761px]">
                {/* Content Section */}
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-6 sm:px-8">
                    {/* Left: Text Section */}
                    <div className="w-full lg:w-1/2 mt-12 md:mt-16 lg:mt-48 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl text-[#CDC697]">PRIVĀTUMA POLITIKA</h1>
                    </div>

                    {/* Right: Image Section */}
                    <div
                        className="w-full lg:w-[704px] h-[300px] sm:h-[400px] lg:h-[469px] flex-shrink-0 mt-8 lg:mt-48"
                        style={{
                            backgroundImage: `url(${PrivatumaPolitikaImg})`,
                            backgroundSize: "cover", // Ensures the image covers the entire box
                            backgroundPosition: "center", // Centers the image in the container
                        }}
                    >
                    </div>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-8 py-10 text-[#5B3767]">
                <p className="text-left text-sm sm:text-md leading-relaxed">
                    Atbilstoši Eiropas Parlamenta un Padomes Regulai 2016/679, SIA „City 55”
                    (E-pasts jaskoguna@gmail.com Tel.: +371200166088) saņem, 2 gadus uzglabā un apstrādā
                    manis nodotos personas datus (E-pasts, vārdu, uzvārdu un tālruņa numuru), ar mērķi nodrošināt saziņu,
                    sniegt pilnvērtīgāku saturu un atbilstošākas reklāmas. Piekrītot datu apstrādei, tieku informēts,
                    ka mani personas dati netiks nosūtīti citiem ES uzņēmumiem, vai uz trešo valsti, vai starptautisku
                    organizāciju.
                    Apzinos savas tiesības saistībā ar manu personas datu dzēšanu, labošanu, apstrādes ierobežošanu,
                    u.c.
                    (vairāk info:
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
