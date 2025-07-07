import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Website Project",
  description: "A detailed overview of the process of building my website.",
};

export default function WebsitePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
                    Website Project
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    This is the page for my website project.
                </p>
            </div>
        </main>
    )
}