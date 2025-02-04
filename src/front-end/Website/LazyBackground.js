import React, { useState, useEffect, useRef } from "react";

const LazyBackground = ({ image, className, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const bgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(bgRef.current); // Stop observing after loading
                }
            },
            { rootMargin: "0px", threshold: 0.1 } // Detect when at least 10% is visible
        );

        if (bgRef.current) {
            observer.observe(bgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={bgRef}
            className={`${className} transition-opacity duration-500 ease-in-out`}
            style={{
                backgroundImage: isVisible ? `url(${image})` : `url('/placeholder.jpg')`, // Use placeholder before loading
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: isVisible ? 1 : 0.3, // Fade effect instead of disappearing
            }}
        >
            {children}
        </div>
    );
};

export default LazyBackground;
