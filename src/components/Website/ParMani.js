import React from "react";
import HeaderParMani from "./HeaderParMani";
import Kapnutelpa from '../../img/Kapnutelpa.png';
import Viesistaba from '../../img/Viesistaba.png';
import BedroomImage from "../../img/BedroomImage.png";

function ParMani() {
    return (
        <div className="mx-auto font-sans text-white">
            <HeaderParMani />

            {/* Main Container */}
            <div
                className="w-[1221px] h-[938px] mx-auto grid grid-cols-2 grid-rows-2 gap-4 border-[1px] border-[#CDC697] mt-16"
                style={{backgroundColor: "#F8F8F8"}}
            >
                {/* Top Left (Text) */}
                <div className="w-[611px] h-[469px] p-8">
                    <h2 className="text-[#5B3767] text-3xl font-bold mb-6">
                        Specializācija - dzīvojamais fonds
                    </h2>
                    <ul className="space-y-4 text-[#5B3767]">
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Mājas un jaunbūves
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Dzīvokļi sērijveida un jaunajās mājās
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Apbūves zemesgabali un zemesgabali ciematos
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Premium klases dzīvokļi un mājas (Jūrmala, Baltezers, klusais centrs, Vecrīga)
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Ekskluzīvi īpašumi
                        </li>
                    </ul>
                </div>

                {/* Top Right (Image) */}
                <div className="w-[611px] h-[469px]">
                    <div className="w-full h-full object-cover"
                        style={{backgroundImage: `url(${Kapnutelpa})`}}>
                    </div>
                </div>

                {/* Bottom Left (Image) */}
                <div className="w-[611px] h-[469px]">
                    <div className="w-full h-full object-cover"
                        style={{backgroundImage: `url(${Viesistaba})`}}>
                    </div>
                </div>

                {/* Bottom Right (Text) */}
                <div className="w-[611px] h-[469px] p-8">
                    <h2 className="text-[#5B3767] text-3xl font-bold mb-6">
                        Klienta ieguvums no sadarbības
                    </h2>
                    <ul className="space-y-4 text-[#5B3767]">
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Pilnīgi drošs, mierīgs un paredzams sava īpašuma pārdošanas process
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Kvalitatīvs juridiskais atbalsts
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Nestandarta darījumu risinājumi
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl mr-4">✔</span>
                            Augstākās kvalitātes klientu serviss no darījuma sākuma līdz beigām
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ParMani;