"use client";
import { type FC, useState, useEffect, type ReactNode, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
    children: ReactNode[];
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    variant?: "default" | "background" | "primary" | "secondary";
    showArrows?: boolean;
    showDots?: boolean;
    className?: string;
    autoplay?: boolean;
    autoplayInterval?: number;
    width?: "full" | "half" | "small" | "none";
    height?: "full" | "half" | "small" | "none";
}

const sizeClasses = {
    "extra-small": "h-24",
    small: "h-32",
    medium: "h-48",
    large: "h-64",
    "extra-large": "h-96",
};

const widthClasses = {
    full: "w-screen max-w-screen",
    half: "w-1/2-screen max-w-1/2-screen",
    small: "w-1/4-screen max-w-1/4-screen",
    none: "",
};

const heightClasses = {
    full: "h-screen max-h-screen",
    half: "h-1/2-screen max-h-1/2-screen",
    small: "h-1/4-screen max-h-1/4-screen",
    none: "",
};

const variantClasses = {
    default: "text-foreground",
    background: "text-background",
    primary: "text-primary",
    secondary: "text-secondary",
};

const Slider: FC<SliderProps> = ({
    children,
    size = "medium",
    variant = "default",
    showArrows = true,
    showDots = true,
    className,
    autoplay = false,
    autoplayInterval = 10000,
    width = "none",
    height = "none",
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const childrens = children.map((child) => {
        return { child, id: crypto.randomUUID() };
    });

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % childrens.length);
    }, [childrens.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + childrens.length) % childrens.length);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(nextSlide, autoplayInterval);
            return () => clearInterval(interval);
        }
    }, [autoplay, autoplayInterval, nextSlide]);

    return (
        <div className={cn("relative overflow-hidden flex justify-center items-center", sizeClasses[size], variantClasses[variant], widthClasses[width], heightClasses[height], className)}>
            {showArrows && (
                <>
                    <button type="button" onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-20 text-primary font-bold">
                        &lt;
                    </button>
                    <button type="button" onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-20 text-primary font-bold">
                        &gt;
                    </button>
                </>
            )}
            <div className="flex transition-transform duration-300 w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {childrens.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-full h-full flex items-center justify-center">
                        {item.child}
                    </div>
                ))}
            </div>
            {showDots && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {childrens.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={cn("w-3 h-3 rounded-full transition-colors", {
                                "bg-primary/40": currentIndex === index,
                                "bg-primary/20": currentIndex !== index,
                            })}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slider;
