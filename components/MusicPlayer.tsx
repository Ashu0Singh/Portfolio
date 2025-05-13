"use client";
import { useState, useRef } from "react";
import { Play, Pause, Disc3 } from "lucide-react";
import Image from "next/image";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [discRotation, setDiscRotation] = useState<number>(0);

    const audioRef = useRef<HTMLAudioElement>(null);
    const discRef = useRef<SVGSVGElement>(null);

    const togglePlay = () => {
        console.log(discRef.current?.transform)
        if (audioRef.current && isPlaying) audioRef.current.pause();
        else if (audioRef.current && !isPlaying) audioRef.current.play();
    };

    return (
        <div className="audio-player">
            <div className="disc">
                <Disc3
                    ref={discRef}
                    className={isPlaying ? "rotating-element" : ""}
                    size={48}
                    onClick={togglePlay}
                    strokeWidth={1.1}
                />
            </div>
            <audio
                ref={audioRef}
                loop={true}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default AudioPlayer;
