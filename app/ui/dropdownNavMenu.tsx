'use client';

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react"; // optional icon package

export default function DropdownNavMenu({
    title,
    options,
    spacing,
}: {
    title: string;
    options: Array<{ label: string; href: string }>;
    spacing: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative h-full">
            {/* Desktop Dropdown Trigger */}
            <div className="hidden md:block h-full group">
                <Link
                    href="#"
                    className={`
                        h-full
                        ${spacing}
                        text-platinum 
                        hover:bg-cadet-gray
                        hover:text-platinum
                        dark:hover:bg-cadet-gray
                        dark:hover:text-platinum
                        text-center 
                        flex 
                        items-center
                        cursor-pointer
                    `}
                >
                    {title}
                </Link>

                {/* Desktop Dropdown Menu */}
                <div className="absolute left-0 hidden group-hover:block z-50">
                    <ul className="bg-rich-black rounded-md shadow-lg mt-2">
                        {options.map((option, index) => {
                            const isFirst = index === 0;
                            const isLast = index === options.length - 1;

                            return (
                                <li key={index}>
                                    <Link
                                        href={option.href}
                                        className={`block px-4 py-2 text-platinum 
                                            hover:bg-cadet-gray 
                                            hover:text-platinum
                                            dark:hover:bg-cadet-gray
                                            dark:hover:text-platinum
                                            ${isFirst ? 'rounded-t-md' : ''}
                                            ${isLast ? 'rounded-b-md' : ''}`}
                                    >
                                        {option.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Mobile Dropdown Trigger */}
            <div className="md:hidden h-full flex items-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className={`h-full ${spacing} text-platinum flex items-center`}
                >
                    {title}
                </button>
            </div>

            {/* Mobile Fullscreen Dropdown */}
            {isOpen && (
                <div className="fixed inset-0 bg-rich-black z-50 flex flex-col">
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsOpen(false)} className="text-platinum text-2xl">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <ul className="flex-1 flex flex-col items-center justify-center gap-6">
                        {options.map((option, index) => (
                            <li key={index}>
                                <Link
                                    href={option.href}
                                    className="text-platinum text-xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {option.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
