export type MenuProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
};

export type CardProps = {
    cardTitle: string;
    cardDescription: Array<string>;
    companyName: string;
    url: string | undefined;
    about: string | undefined;
    techStack: Array<string> | undefined;
    delay?: number;
};
