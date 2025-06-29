import { CardProps } from "@/types";
import Link from "next/link";
import { Badge } from "./ui/badge";
import * as motion from "motion/react-client";

const Card = ({
    cardTitle,
    cardDescription,
    companyName,
    url,
    about,
    techStack,
    delay = 0,
}: CardProps) => {
    return (
        <motion.div
            className="card"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay, duration: 0.5 }}
        >
            {url ? (
                <Link href={url} className="card-link">
                    {companyName}
                    <div className="card-title">{cardTitle}</div>
                </Link>
            ) : (
                <div className="card-link">
                    {companyName}
                    <div className="card-title">{cardTitle}</div>
                </div>
            )}

            {about && (
                <div className="card-about">
                    <div className="card-about-title">About the company</div>
                    <p className="card-about-text">{about}</p>
                </div>
            )}
            <div className="card-content">
                <div className="card-content-title">Work</div>
                <div className="card-content-desc">
                    {cardDescription.map((desc, index) => (
                        <p key={index} className="card-desc">
                            {desc}
                        </p>
                    ))}
                </div>
            </div>
            {techStack && (
                <div className="card-footer">
                    {techStack.map((stack, index) => (
                        <Badge
                            variant="outline"
                            key={index}
                            className="text-sm"
                        >
                            {stack}
                        </Badge>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Card;
