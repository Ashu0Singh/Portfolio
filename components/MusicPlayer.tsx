"use client";
import { useState, useRef, useEffect } from "react";
import { Disc3 } from "lucide-react";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [rotation, setRotation] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null);
    const discRef = useRef<SVGSVGElement>(null);
    const requestRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number | null>(null);

    const rotateDisc = (time: number) => {
        if (lastTimeRef.current !== null) {
            const delta = time - lastTimeRef.current;
            setRotation((prev) => prev + delta * 0.08);
        }
        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(rotateDisc);
    };

    useEffect(() => {
        if (isPlaying) {
            requestRef.current = requestAnimationFrame(rotateDisc);
        } else {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            requestRef.current = null;
            lastTimeRef.current = null;
        }
    }, [isPlaying]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
    };

    return (
        <div className="audio-player">
            <div className="disc" onClick={togglePlay}>
                <Disc3
                    ref={discRef}
                    size={42}
                    strokeWidth={1.3}
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: isPlaying
                            ? "none"
                            : "transform 0.2s linear",
                    }}
                />
            </div>
            <audio
                ref={audioRef}
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default AudioPlayer;
