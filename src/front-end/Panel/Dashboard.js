import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-gray-800">Paneļa Izvēlne</h1>

            <div className="mt-8 flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="bg-gold text-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
                    <h2 className="text-xl font-semibold text-center">Video pamācība</h2>
                    <p className="mt-4">Šeit vari apskatīties video pamācību kā strādā panelis ar visu step by step kā
                        pievienot īpašumu</p>
                </div>

                <div className="bg-[#5B3767] text-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
                    <h2 className="text-xl font-semibold text-center">PDF Pamācība</h2>
                    <p className="mt-4">Šeit vari apskatīties pdf formātā rakstisku pamacību, ja vēlies īsi un konkrēti
                        redzēt kā strādā panelis</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

