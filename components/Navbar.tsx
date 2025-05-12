"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-navigation">
                <Link href="/">Home</Link>
                <Link href="/portfolio">Work</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div>
                <ThemeToggle />
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
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:-rotate-90" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all dark:-rotate-90" />
            )}
        </Button>
    );
};

export default Navbar;
