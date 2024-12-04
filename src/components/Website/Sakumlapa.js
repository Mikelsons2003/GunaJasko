import React from "react";
import HeaderSakums from "./HeaderSakums";
import GunaJasko from '../../img/GunaJasko.png';
import JaunakieObjekti from '../../img/JaunakieObjekti.png';
import Vannasistaba from '../../img/Vannasistaba.png';
import Swedbank from '../../img/Swedbank.png';
import LatvijasNotars from '../../img/LatvijasNotars.png';
import Altum from '../../img/Altum.png';
import Luminor from '../../img/Luminor.png';
import Seb from '../../img/Seb.png';
import Citadele from '../../img/Citadele.png';
import SazinasForma from '../../img/SazinasForma.png';
import Experience from '../../img/Experience.png';
import Check from '../../img/Check.png';
import Safety from '../../img/Safety.png';
import Lanida from '../../img/Lanida.png';
import AM from '../../img/AM.png';

function Sakumlapa() {
    return (
        <div className="mx-auto font-sans text-white">
            <HeaderSakums />
            {/* about section */}
            <section className="bg-[#5B3767] text-white py-16">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
                    {/* left side */}
                    <div className="lg:w-1/2">
                        {/* Heading */}
                        <h1 className="text-[#CDC697] text-4xl font-bold mb-12 text-left">KĀPĒC SADARBOTIES AR MANI</h1>

                        {/* Information Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div
                                className="w-[273px] h-[212px] text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                                {/* Image */}
                                <div
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
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
                                {/* Image */}
                                <div
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
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
                                {/* Image */}
                                <div
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
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
                                {/* Image */}
                                <div
                                    className="w-[95px] h-[72px] bg-contain bg-no-repeat bg-left"
                                    style={{backgroundImage: `url(${Lanida})`}}>
                                </div>
                                {/* Title */}
                                <div className="text-2xl font-bold text-white">PROFESIONALITĀTE</div>
                                {/* Description */}
                                <a href="https://lanida.lv/biedri/guna-jasko-2/" className="text-sm underline">
                                    profesionalitāte
                                    Latvijas nekustamo īpašumu
                                    asociācijas “Lanīda” biedrs
                                </a>
                            </div>
                        </div>


                        {/* Button */}
                        <div className="mt-12 text-left">
                            <button
                                className="w-[317px] h-[55px] border border-[#CDC697] text-[#CDC697] hover:text-[#9C9150] hover:border-[#9C9150] transition duration-300 ease-in-out font-medium text-sm">
                                UZZINĀT VAIRĀK
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                        <div className="">
                            <div
                                className="-top-28 bg-cover bg-center w-[558px] h-[837px] relative"
                                style={{backgroundImage: `url(${GunaJasko})`}}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Newest objects */}
            <section className="py-16 bg-white flex items-center justify-center min-h-screen">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    {/* Heading */}
                    <h1 className="text-center text-[#5B3767] text-4xl font-bold mb-12">JAUNĀKIE OBJEKTI</h1>

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                        {/* Card 1 */}
                        <div className="border border-[#CDC697] w-[340px] h-[523px] mx-auto">
                            <div className="w-full h-[200px] bg-gray-200">
                                <img
                                    className="object-cover w-full h-full"
                                    src={JaunakieObjekti} // Replace with the actual image URL or import
                                    alt="Property Image"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-left mt-10">
                                    <h2 className="text-[#5B3767] text-2xl font-bold mb-4">120 000 EUR</h2>
                                </div>
                                <div className="w-full max-w-screen-xl mx-auto mb-4">
                                    <div className="border-b-[1px] border-[#CDC697]"></div>
                                </div>
                                {/* Two-Column Layout for Text */}
                                <div className="grid grid-cols-2 text-sm text-[#5B3767] gap-y-2">
                                    <span className="text-left py-1">Adrese:</span>
                                    <span className="text-right font-bold">Alberta 1, Rīga</span>

                                    <span className="text-left pb-1">Īpašuma tips:</span>
                                    <span className="text-right font-bold">Dzīvoklis</span>

                                    <span className="text-left">Istabu sk.:</span>
                                    <span className="text-right font-bold">5</span>
                                </div>

                                <div className="text-left">
                                    <a href="#"
                                       className="text-[#CDC697] text-sm font-bold mt-6 inline-flex items-center">
                                        SKATĪT <span className="ml-1">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-[#CDC697] w-[340px] h-[523px] mx-auto">
                            <div className="w-full h-[200px] bg-gray-200">
                                <img
                                    className="object-cover w-full h-full"
                                    src={JaunakieObjekti} // Replace with the actual image URL or import
                                    alt="Property Image"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-left">
                                    <h1 className="text-[#5B3767] text-xl mb-3">Izīrē</h1>
                                    <h2 className="text-[#5B3767] text-2xl font-bold mb-4">760 EUR / mēn</h2>
                                </div>
                                <div className="w-full max-w-screen-xl mx-auto mb-4">
                                    <div className="border-b-[1px] border-[#CDC697]"></div>
                                </div>
                                {/* Two-Column Layout for Text */}
                                <div className="grid grid-cols-2 text-sm text-[#5B3767] gap-y-2">
                                    <span className="text-left py-1">Adrese:</span>
                                    <span className="text-right font-bold">Alberta 1, Rīga</span>

                                    <span className="text-left pb-1">Īpašuma tips:</span>
                                    <span className="text-right font-bold">Dzīvoklis</span>

                                    <span className="text-left">Istabu sk.:</span>
                                    <span className="text-right font-bold">5</span>
                                </div>

                                <div className="text-left">
                                    <a href="#"
                                       className="text-[#CDC697] text-sm font-bold mt-6 inline-flex items-center">
                                        SKATĪT <span className="ml-1">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-[#CDC697] w-[340px] h-[523px] mx-auto">
                            <div className="w-full h-[200px] bg-gray-200">
                                <img
                                    className="object-cover w-full h-full"
                                    src={JaunakieObjekti} // Replace with the actual image URL or import
                                    alt="Property Image"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-left">
                                    <h1 className="text-[#5B3767] text-xl mb-3">Pārdod</h1>
                                    <h2 className="text-[#5B3767] text-2xl font-bold mb-4">120 000 EUR</h2>
                                </div>
                                <div className="w-full max-w-screen-xl mx-auto mb-4">
                                    <div className="border-b-[1px] border-[#CDC697]"></div>
                                </div>
                                {/* Two-Column Layout for Text */}
                                <div className="grid grid-cols-2 text-sm text-[#5B3767] gap-y-2">
                                    <span className="text-left py-1">Adrese:</span>
                                    <span className="text-right font-bold">Alberta 1, Rīga</span>

                                    <span className="text-left pb-1">Īpašuma tips:</span>
                                    <span className="text-right font-bold">Dzīvoklis</span>

                                    <span className="text-left">Istabu sk.:</span>
                                    <span className="text-right font-bold">5</span>
                                </div>

                                <div className="text-left">
                                    <a href="#"
                                       className="text-[#CDC697] text-sm font-bold mt-6 inline-flex items-center">
                                        SKATĪT <span className="ml-1">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-12 flex justify-center">
                        <button
                            className="w-[356px] h-[55px] bg-[#5B3767] text-[#CDC697] font-medium text-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#CDC697]">
                            SKATĪT VISUS OBJEKTUS
                        </button>
                    </div>
                </div>
            </section>

            {/* Atsauksmes Section */}
            <section className="relative w-full flex items-center justify-center min-h-screen">
                {/* Background Image */}
                <div
                    className="absolute flex items-center justify-center w-[1225px] h-[645px]"
                    style={{
                        backgroundImage: `url(${Vannasistaba})`,
                        backgroundSize: 'cover', // Keeps the image covering the container
                        backgroundPosition: 'center', // Centers the image
                    }}
                ></div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    {/* Heading */}
                    <h2 className="text-[#CDC697] text-4xl font-bold mb-12">ATSAUKSMES</h2>

                    {/* Testimonial Box */}
                    <div
                        className="relative bg-white w-[782px] h-[380px] opacity-90 p-12 flex flex-col items-center">
                        {/* Centered Image */}
                        <div
                            className="w-[100px] h-[100px] object-cover flex items-center justify-center -mt-4 mb-6"
                            style={{
                                backgroundImage: `url(${AM})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        ></div>

                        {/* Testimonial Content */}
                        <p className="text-[#5B3767] text-lg mb-4 leading-relaxed text-center">
                            Labdien, Guna! Ar vēlēšanos gribu pateikties par padarīto agenta darbu mājas pārdošanā un
                            dzīvokļa iegādē! Nemot vērā, ka viss notika attālināti, tādējādi uzticēt vārdi, jo viss
                            noritēja kā pa notīm! Paši mēs noteikti ieteiksim kādas lamatas! Pie iespējas noteikti Jūs
                            rekomendēsim citiem. Veiksmi Jums it visā!
                        </p>
                        <p className="font-semibold text-[#9C9150] mt-4 text-center">Andrejs Mihailovs</p>
                    </div>
                </div>
            </section>


            {/* Sadarbības Partneri Section */}
            <section className="w-[1225px] mx-auto">
                <div className="max-w-screen-xl mx-auto px-8 text-center">
                    <h1 className="text-[#6C256B] text-4xl font-bold mb-24">SADARBIĪBAS PARTNERI</h1>

                    {/* Partners Logos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-center items-center">
                        {/* Partner 1 */}
                        <div className="flex justify-center">
                            <div className="w-[216px] h-[48px] mx-auto relative object-cover"
                                 style={{backgroundImage: `url(${Swedbank})`}}></div>
                        </div>
                        {/* Partner 2 */}
                        <div className="flex justify-center">
                            <div className="w-[107px] h-[160px] mx-auto relative object-cover"
                                 style={{backgroundImage: `url(${LatvijasNotars})`}}></div>
                        </div>
                        {/* Partner 3 */}
                        <div className="flex justify-center">
                            <div className="w-[152px] h-[80px] mx-auto relative object-cover"
                                 style={{backgroundImage: `url(${Altum})`}}></div>
                        </div>
                        {/* Partner 4 */}
                        <div className="flex justify-center">
                            <div className="w-[165px] h-[60px] mx-auto relative object-cover"
                                 style={{backgroundImage: `url(${Luminor})`}}></div>
                        </div>
                        {/* Partner 5 */}
                        <div className="flex justify-center">
                            <div className="w-[136px] h-[60px] mx-auto relative object-cover"
                                 style={{backgroundImage: `url(${Seb})`}}></div>
                        </div>
                        {/* Partner 6 */}
                        <div className="flex justify-center">
                            <div className="w-[158px] h-[88px] mx-auto relative object-cover"
                                 style={{backgroundImage: `url(${Citadele})`}}></div>
                        </div>
                    </div>
                    <div className="w-full max-w-screen-xl mx-auto mt-16">
                        <div className="border-b-[1px] border-[#CDC697]"></div>
                    </div>
                </div>
            </section>
            {/* Saziņas Forma Section */}
            <section className="w-full py-16 relative mt-16 min-h-screen">
                {/* Background Image */}
                <div className="flex justify-center items-center w-full h-[711px] absolute">
                    <div
                        className="w-[1440px] h-[711px]"
                        style={{
                            backgroundImage: `url(${SazinasForma})`,
                            backgroundSize: 'contain', // Ensures the full image is visible without cropping
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>


                {/* Form Container */}
                <div className="relative z-10 w-[760px] mx-auto bg-[#E8E1D3] p-10 shadow-lg -mt-16 mr-80">
                    <h2 className="text-[#6C256B] text-4xl font-bold mb-8 text-left">SAZIŅAS FORMA</h2>

                    {/* Form */}
                    <form className="grid gap-6">
                        {/* Vārds (First Name) & Uzvārds (Last Name) */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Vārds"
                                    className="w-full p-4 placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Uzvārds"
                                    className="w-full p-4 placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                />
                            </div>
                        </div>

                        {/* E-pasts (Email) & Tālrunis (Phone Number) */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="email"
                                    placeholder="E-pasts"
                                    className="w-full p-4 placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Tālrunis"
                                    className="w-full p-4 placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                />
                            </div>
                        </div>

                        {/* Darījuma veids (Transaction Type), Reģions (Region), Īpašuma tips (Property Type) */}
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <select
                                    className="w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                >
                                    <option>Izvēlēties</option>
                                    <option>Pirkšana</option>
                                    <option>Pārdošana</option>
                                </select>
                            </div>
                            <div>
                                <select
                                    className="w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                >
                                    <option>Izvēlēties</option>
                                    <option>Rīga</option>
                                    <option>Latgale</option>
                                </select>
                            </div>
                            <div>
                                <select
                                    className="w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                >
                                    <option>Izvēlēties</option>
                                    <option>Dzīvoklis</option>
                                    <option>Māja</option>
                                </select>
                            </div>

                        </div>

                        {/* Komentārs (Comments) */}
                        <div>
            <textarea
                placeholder="Komentārs"
                rows="4"
                className="w-full p-4 placeholder-[#9C9150]"
            ></textarea>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="agree"
                                className="mr-2 w-4 h-4 border-4 border-[#6C256B] bg-[#FFD700] checked:bg-[#6C256B] focus:ring-0"
                            />
                            <label htmlFor="agree" className="text-sm text-[#5B3767]">
                                Piekrītu personas datu apstrādes noteikumiem.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-6">
                            <button
                                className="w-[238px] h-[55px] bg-[#5B3767] text-[#CDC697] font-medium text-sm hover:bg-opacity-90"
                            >
                                SŪTĪT
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Sakumlapa;