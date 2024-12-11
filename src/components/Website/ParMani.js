import React from "react";
import Header from "./Header";
import Kapnutelpa from '../../img/Kapnutelpa.png';
import Viesistaba from '../../img/Viesistaba.png';
import Experience from "../../img/Experience.png";
import Check from "../../img/Check.png";
import Safety from "../../img/Safety.png";
import Lanida from "../../img/Lanida.png";
import GunaParMani from "../../img/GunaParMani.png";

function ParMani() {
    return (
        <div className="mx-auto font-sans text-white">
            <Header/>
            <div className="bg-[#5B3767] w-full mx-auto px-8 flex items-center h-[810px]">
                {/* Left: Text Section */}
                <div className="w-1/2 space-y-6 ml-80">
                    <div className="w-[628px] h-[367px] mt-32">
                        <h2 className="text-4xl text-left">Par aģentu</h2>
                        <p className="text-lg leading-relaxed text-left mt-10">
                            Nekustamo īpašumu pārdošanā kopš 2006. gada, specializācija – dzīvojamais fonds:
                            dzīvokļu, privātmāju un zemju tirdzniecība un īre Rīgā un Rīgas rajonā.
                            Pieredze apjomīgu projektu tirdzniecībā kā projektu vadītājai (attīstītāju projekti virs 100
                            dzīvokļiem).
                        </p>
                        <p className="text-lg leading-relaxed text-left mt-20">
                            Vairāk ka 600 pārdošanas un īres darījumi.
                        </p>
                        <p className="text-lg leading-relaxed text-left mt-10">
                            Brīvi runāju trīs valodās – latviešu, krievu un angļu valodā.
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <button
                            className="w-[274px] h-[55px] border border-[#CDC697] text-[#CDC697] mt-10">
                            SAZINĀTIES
                        </button>
                    </div>
                </div>

                {/* Right: Image Section */}
                <div className="w-1/2 flex justify-end mr-80 mt-32">
                    <div className="w-[433px] h-[605px] object-contain -mb-48"
                         style={{backgroundImage: `url(${GunaParMani})`}}
                    >
                    </div>
                </div>
            </div>
            {/* Main Container */}
            <div
                className="w-[1221px] h-[938px] mx-auto grid grid-cols-2 grid-rows-2 gap-4 border-[1px] border-[#CDC697] mt-28"
                style={{backgroundColor: "#F8F8F8"}}
            >
                {/* Top Left (Text) */}
                <div className="w-[611px] h-[469px] pt-10 pl-12">
                    <h2 className="w-[422px] text-[#5B3767] text-4xl mb-6 text-left">
                        Specializācija - dzīvojamais fonds
                    </h2>
                    <ul className="space-y-4 text-[#5B3767] pt-4">
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Mājas un jaunbūves
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Dzīvokļi sērijveida un jaunajās mājās
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Apbūves zemesgabali un zemesgabali ciematos
                        </li>
                        <li className="flex items-center text-left w-[430px]">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Premium klases dzīvokļi un mājas (Jūrmala, Baltezers, klusais centrs, Vecrīga)
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Ekskluzīvi īpašumi
                        </li>
                    </ul>
                </div>

                {/* Top Right (Image) */}
                <div className="w-[611px] h-[469px] -ml-[9px]">
                    <div className="w-full h-full object-cover"
                         style={{backgroundImage: `url(${Kapnutelpa})`}}>
                    </div>
                </div>

                {/* Bottom Left (Image) */}
                <div className="w-[611px] h-[469px] -mt-[8px]">
                    <div className="w-full h-full object-cover"
                         style={{backgroundImage: `url(${Viesistaba})`}}>
                    </div>
                </div>

                {/* Bottom Right (Text) */}
                <div className="w-[611px] h-[469px] p-8">
                    <h2 className="text-[#5B3767] text-4xl mb-6 text-left w-[422px]">
                        Klienta ieguvums no sadarbības
                    </h2>
                    <ul className="space-y-4 text-[#5B3767]">
                        <li className="flex items-center w-[430px] text-left">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Pilnīgi drošs, mierīgs un paredzams sava īpašuma pārdošanas process
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Kvalitatīvs juridiskais atbalsts
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Nestandarta darījumu risinājumi
                        </li>
                        <li className="flex items-center w-[358px] text-left">
                            <span className="text-[#CDC697] text-4xl mr-4">✔</span>
                            Augstākās kvalitātes klientu serviss no darījuma sākuma līdz beigām
                        </li>
                    </ul>
                </div>
            </div>

            <section className="bg-[#5B3767] text-white h-[602px] flex items-center justify-center mt-28">
                <div className="container mx-auto px-36 text-center">
                    {/* Heading */}
                    <h1 className="text-[#CDC697] text-4xl mb-20">KĀPĒC SADARBOTIES AR MANI</h1>

                    {/* Information Cards in a Single Row */}
                    <div className="grid grid-cols-4">
                        {/* Card 1 */}
                        <div
                            className="w-[273px] h-[212px] text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                 style={{backgroundImage: `url(${Experience})`}}>
                            </div>
                            {/* Title */}
                            <div className="text-2xl font-bold text-white">PIEREDZE</div>
                            {/* Description */}
                            <p className="text-sm">Tirgū kopš 2006. gada</p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="w-[273px] h-[212px] text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                 style={{backgroundImage: `url(${Check})`}}>
                            </div>
                            {/* Title */}
                            <div className="text-2xl font-bold text-white">UZTICAMĪBA</div>
                            {/* Description */}
                            <p className="text-sm">Reģistrēta Ekonomikas ministrijas starpnieku reģistrā ar nr.224</p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="w-[273px] h-[212px] text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                 style={{backgroundImage: `url(${Safety})`}}>
                            </div>
                            {/* Title */}
                            <div className="text-2xl font-bold text-white">DROŠĪBA</div>
                            {/* Description */}
                            <p className="text-sm">Darbība civiltiesiski apdrošināta</p>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="w-[273px] h-[212px] text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <div className="w-[95px] h-[72px] bg-contain bg-no-repeat bg-left"
                                 style={{backgroundImage: `url(${Lanida})`}}>
                            </div>
                            {/* Title */}
                            <div className="text-2xl font-bold text-white">PROFESIONALITĀTE</div>
                            {/* Description */}
                            <a href="https://lanida.lv/biedri/guna-jasko-2/" className="text-sm">
                                Latvijas nekustamo īpašumu asociācijas “Lanīda” biedrs
                            </a>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-12">
                        <button
                            className="w-[317px] h-[55px] border border-[#CDC697] text-[#CDC697] hover:text-[#9C9150] hover:border-[#9C9150] transition duration-300 ease-in-out font-medium text-sm">
                            UZZINĀT VAIRĀK
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#FBF8FB] text-[#5B3767] py-20 px-6 flex items-center justify-center">
                <div className="container mx-auto text-center">
                    {/* Education Section */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-serif mb-6 text-left ml-48">Izglītība</h2>
                        <p className="text-lg leading-relaxed mx-auto max-w-6xl text-left">
                            Esmu pabeigusi uzņēmējdarbības vadības studijas Rīgas Stradiņa universitātē
                            (bakalaura grāds) un digitālā mārketinga studijas BA Turība. Esmu apmeklējusi
                            neskaitāmus kvalifikācijas paaugstināšanas un pārdošanas kursus, kas ir
                            apliecināti ar sertifikātiem, regulāri piedalos LANĪDA rīkotajās konferencēs
                            nozares speciālistiem. Angļu valodu esmu apguvusi Lielbritānijā (Oxford school branch).
                        </p>
                    </div>

                    {/* Personal Attributes Section */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-serif mb-6 text-left ml-48">Personīgās īpašības</h2>
                        <p className="text-lg leading-relaxed mx-auto max-w-6xl text-left">
                            Esmu profesionāla, korekta un ātra, pieejama saviem klientiem, ar elastīgu darba laiku.
                            Spēju pielāgoties klienta laika grafikam.
                        </p>
                    </div>

                    {/* Button */}
                    <div>
                        <button
                            className="w-[317px] h-[55px] bg-[#5B3767] hover:bg-[#371243] transition duration-300 ease-in-out text-[#CDC697] font-medium">
                            PIETEIKT ĪPAŠUMU
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default ParMani;