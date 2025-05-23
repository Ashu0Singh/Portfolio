import * as motion from "motion/react-client";
import Data from "@/data.json";
import { GeistSans } from "geist/font/sans";

export default function Home() {
    return (
        <div className="homepage">
            <div className="hero">
                <motion.h1
                    className={`${GeistSans.className} hero-title`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {Data.hero.title}
                </motion.h1>
                <motion.h2
                    className={`${GeistSans.className} hero-subtitle`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    {Data.hero.subtitle}
                </motion.h2>
                <motion.p
                    className={`${GeistSans.className} hero-description`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                >
                    {Data.hero.description}
                </motion.p>
            </div>
        </div>
    );
}
