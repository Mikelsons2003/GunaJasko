import React from "react";
import HeaderPolitika from "./Headers/HeaderPolitika";
import Pakalpojumaimg1 from "../../img/Pakalpojumaimg1.png";
import {Link} from "react-router-dom";

function PrivatumaPolitika() {
    return (
        <div className="mx-auto font-sans text-[#5B3767] bg-[#FBF8FB]">
            <HeaderPolitika/>
            <div>
                <p className="w-[912px] h=[168px] text-left text-md p-20 ml-72">Atbilstoši Eiropas Parlamenta un Padomes Regulai 2016/679, SIA „City 55”
                    (E-pasts jaskoguna@gmail.com Tel.: +371200166088)saņem, 2 gadus uzglabā un apstrādā
                    manis nodotos personas datus(E-pasts, vārdu, uzvārdu un tālruņa numuru), ar mērķi nodrošināt saziņu,
                    sniegt pilnvērtīgāku saturu un atbilstošākas reklāmas. Piekrītot datu apstrādei, tieku informēts,
                    ka mani personas dati netiks nosūtīti citiem ES uzņēmumiem, vai uz trešo valsti, vai starptautisku organizāciju.
                    Apzinos savas tiesības saistībā ar manu personas datu dzēšanu, labošanu, apstrādes ierobežošanu, u.c.
                    (vairāk info: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG)</p>
            </div>
        </div>
    );
}

export default PrivatumaPolitika;
