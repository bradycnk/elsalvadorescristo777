
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    threshold?: number; // 0.0 to 1.0 - how much of the element must be visible to trigger
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
    children, 
    threshold = 0.1,
    className = "" 
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Trigger animation when element enters viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optional: Stop observing once visible so it doesn't animate out when scrolling up
                    if (domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            });
        }, { 
            threshold: threshold,
            rootMargin: '0px 0px -50px 0px' // Offset slightly so it triggers before the very bottom
        });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out transform will-change-transform ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
