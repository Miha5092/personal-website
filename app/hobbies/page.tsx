import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Hobbies",
  description: "A list of my hobbies and interests.",
};

export default function HobbiesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          My Hobbies
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Programming</h2>
            <p className="text-gray-700">
              I enjoy building web applications, exploring new frameworks, and solving coding challenges.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Reading</h2>
            <p className="text-gray-700">
              I love reading books about technology, science fiction, and personal development.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Photography</h2>
            <p className="text-gray-700">
              Capturing moments and exploring the world through the lens of a camera.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Gaming</h2>
            <p className="text-gray-700">
              Playing strategy games and exploring virtual worlds in my free time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
