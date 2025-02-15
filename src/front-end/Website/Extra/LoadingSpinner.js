import {FaHouse} from "react-icons/fa6";
import "../../../App.css";
import {t} from "i18next";

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* House icon */}
            <FaHouse className="text-8xl mb-8" style={{color: "#5B3767"}}/>

            {/* Loading spinner */}
            <div className="loading-spinner"></div>

            {/* Loading text */}
            <p className="mt-8 text-xl font-semibold text-gray-700">{t("objektiIeskats.loadingTeksts")}</p>
        </div>
    );
};

export default LoadingSpinner;