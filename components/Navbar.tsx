"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GeistMono } from "geist/font/mono";
import { useIsMobile } from "@/hooks/use-mobile";
import { MenuProps } from "@/types";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();
    return (
        <div className="navbar">
            <Link href="/" className={`${GeistMono.className} navbar-logo`}>
                AS
            </Link>
            {isMobile === false && (
                <div className="navbar-navigation">
                    <Link href="/">Home</Link>
                    <Link href="/work">Work</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            )}
            <div className="navbar-actions">
                <ThemeToggle />
                {isMobile && (
                    <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                )}
            </div>
        </div>
    );
};

const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="navbar-toggle hidden"></div>;

    const handleToggle = () => {
        let currentTheme = theme;

        if (theme === "system") {
            currentTheme = resolvedTheme;
            localStorage.setItem("theme", currentTheme || "dark");
        }

        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className="navbar-toggle"
            onClick={handleToggle}
        >
            {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
        </Button>
    );
};

const HamburgerMenu = ({ setIsOpen, isOpen }: MenuProps) => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="navbar-menu"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <Menu className="h-[1.2rem] w-[1.2rem] transition-all" />
                </Button>
            </DrawerTrigger>
            <DrawerContent
                className="navbar-container"
            >
                <DrawerTitle className="navbar-header-mobile">Menu</DrawerTitle>
                <div className="navbar-navigation-mobile">
                    <Link href="/">Home</Link>
                    <Link href="/work">Work</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default Navbar;
