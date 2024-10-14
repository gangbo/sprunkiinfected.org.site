'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import {Maximize2, Minimize2} from 'lucide-react';

interface FullscreenIframeProps {
    src: string;
    title: string;
    thumbnailSrc: string;
}

export default function FullscreenIframe({ src, title, thumbnailSrc }: FullscreenIframeProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }, []);

    const handlePlay = useCallback(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${isFullscreen ? 'h-screen' : 'h-[500px]'}`}
        >
            {!isLoaded ? (
                <div className="relative w-full h-full">
                    <Image
                        src={thumbnailSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <button
                        onClick={handlePlay}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-full flex items-center transition-colors duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2"> Play </span>
                    </button>
                </div>
            ) : (
                <iframe
                    src={src}
                    title={title}
                    className="w-full h-full rounded-lg"
                />
            )}
            <button
                onClick={toggleFullscreen}
                className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-3 rounded-lg flex items-center transition-all duration-300"
            >
                {isFullscreen ? (
                    <Minimize2 className="h-5 w-5" />
                ) : (
                    <Maximize2 className="h-5 w-5" />
                )}
            </button>
        </div>
    );
}