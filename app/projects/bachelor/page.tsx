import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Bachelor's Thesis",
  description: "A detailed overview of my bachelor's thesis project.",
};

export default function BachelorProjectPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
                    Bachelor's Thesis
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    This is the page for my bachelor's thesis project.
                </p>
            </div>
        </main>
    )
}