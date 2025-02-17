import React from 'react';

export default function PopupMessage({message, onClose}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className="bg-white p-8 w-[90%] sm:w-[400px] sm:h-[300px] flex items-center justify-center relative shadow-lg border border-[#6C256B]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="text-2xl absolute top-4 right-4 text-[#6C256B] hover:text-gray-700"
                >
                    ✖
                </button>

                {/* Popup Message */}
                <p className="text-center text-[#6C256B] font-medium">
                    {message}
                </p>
            </div>
        </div>
    );
}