import React, {useEffect, useRef, useState} from "react";

const LazyBackground = ({image, className, children, backgroundSize = "cover"}) => {
    const [isVisible, setIsVisible] = useState(false);
    const bgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(bgRef.current);
                }
            },
            {rootMargin: "0px", threshold: 0.1}
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
                backgroundImage: isVisible ? `url(${image})` : `url('/placeholder.jpg')`,
                backgroundSize, // Now customizable!
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: isVisible ? 1 : 0.3,
            }}
        >
            {children}
        </div>
    );
};

export default LazyBackground;
