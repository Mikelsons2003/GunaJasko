import React from 'react';

const Dashboard = () => {

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-gray-800">Dashboard</h1>

            <div className="mt-8 flex justify-between space-x-4">
                <div className="bg-gold text-white p-6 rounded-lg shadow-md w-1/2">
                    <h2 className="text-xl font-semibold text-center">Video Pamaciba</h2>
                    <p className="mt-4">Content related to video will be displayed here.</p>
                </div>

                <div className="bg-[#5B3767] text-white p-6 rounded-lg shadow-md w-1/2">
                    <h2 className="text-xl font-semibold text-center">PDF Pamaciba</h2>
                    <p className="mt-4">Content related to PDF will be displayed here.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
