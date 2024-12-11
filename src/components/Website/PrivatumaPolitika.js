import React from "react";
import PrivatumaPolitikaImg from '../../img/PrivatumaPolitikaImg.png';
import Header from "./Header";


function PrivatumaPolitika() {
    return (
        <div className="mx-auto font-sans text-[#5B3767] bg-[#FBF8FB]">
            <Header/>
            <div className="font-sans text-white bg-[#5B3767] h-[761px]">
                {/* Content Section */}
                <div className="w-full max-w-screen-xl mx-auto flex items-center gap-28">
                    {/* Left: Text Section */}
                    <div className="w-1/2 mt-48">
                        <h1 className="text-4xl text-[#CDC697]">PRIVĀTUMA POLITIKA</h1>
                    </div>

                    {/* Right: Image Section */}
                    <div
                        className="w-[704px] h-[469px] flex-shrink-0 mt-48"
                        style={{
                            backgroundImage: `url(${PrivatumaPolitikaImg})`,
                            backgroundSize: "cover", // Ensures the image covers the entire box
                            backgroundPosition: "center", // Centers the image in the container
                        }}
                    >
                    </div>
                </div>
            </div>
            <div>
                <p className="w-[912px] h=[168px] text-left text-md p-20 ml-72">Atbilstoši Eiropas Parlamenta un Padomes
                    Regulai 2016/679, SIA „City 55”
                    (E-pasts jaskoguna@gmail.com Tel.: +371200166088)saņem, 2 gadus uzglabā un apstrādā
                    manis nodotos personas datus(E-pasts, vārdu, uzvārdu un tālruņa numuru), ar mērķi nodrošināt saziņu,
                    sniegt pilnvērtīgāku saturu un atbilstošākas reklāmas. Piekrītot datu apstrādei, tieku informēts,
                    ka mani personas dati netiks nosūtīti citiem ES uzņēmumiem, vai uz trešo valsti, vai starptautisku
                    organizāciju.
                    Apzinos savas tiesības saistībā ar manu personas datu dzēšanu, labošanu, apstrādes ierobežošanu,
                    u.c.
                    (vairāk info:
                    https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG)</p>
            </div>
        </div>
    );
}

export default PrivatumaPolitika;
