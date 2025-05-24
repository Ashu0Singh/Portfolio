import Card from "@/components/Card";
import Data from "@/data.json";

export default function Work() {
    const { workExperience } = Data;

    return (
        <div className="work">
            <div className="work-header">
                <h1>Work experience</h1>
            </div>
            <div className="work-layout">
                {workExperience.map(
                    ({ company, url, about, position, description, techStack }, index) => (
                        <Card
                            key={index}
                            about={about}
                            cardTitle={position}
                            cardDescription={description}
                            url={url}
                            companyName={company}
                            techStack={techStack}
                            delay={(index + 1) * 0.3}
                        ></Card>
                    ),
                )}
            </div>
        </div>
    );
}
