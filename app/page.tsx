import * as motion from "motion/react-client";
import Data from "@/data.json";

export default function Home() {
    return (
        <div className="homepage">
            <div className="hero">
                <motion.h1
                    className="hero-title"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    {Data.hero.title}
                </motion.h1>
                <motion.h2
                    className="hero-subtitle"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.2 }}
                >
                    {Data.hero.subtitle}
                </motion.h2>
                <motion.p
                    className="hero-description"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.7, duration: 1 }}
                >
                    {Data.hero.description}
                </motion.p>
            </div>
        </div>
    );
}
