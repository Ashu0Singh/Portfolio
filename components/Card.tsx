import { CardProps } from "@/types";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Card = ({
    cardTitle,
    cardDescription,
    companyName,
    url,
    about,
    techStack,
}: CardProps) => {
    return (
        <div className="card">
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
                        <Badge variant="outline" key={index} className="text-lg">
                            {stack}
                        </Badge>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;
