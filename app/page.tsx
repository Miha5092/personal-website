import Image from "next/image";
import React from "react";
import TextSection, { HeaderAndText } from "./ui/text";

import { whyThisWebsite, aboutMe, education } from "./text/mainPage";

function FirstImpression() {
  return (
    <div className="flex w-full bg-cadet-gray justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-center py-16 w-full md:w-4/5 xl:w-3/4 max-w-[1400px]">
        <div className="flex-1 order-1 flex flex-col xl:mr-16">
          <div className="flex-1 max-w-[600px] text-center md:text-left">
            <h1 className="text-5xl md:text-5xl font-bold mb-4">
              Hello, I&apos;m Mihai Mitrea
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mr-0 md:ml-0 mr-4 ml-4">
              Welcome to my personal website! Here you can find out more about me,
              my projects, and what I am up to.
            </p>
          </div>

          <div className="hidden xl:block text-center md:text-left">
            <a href="/Mihai Mitrea CV.pdf" className="text-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block no-underline cursor-pointer">
              Download My CV
            </a>
          </div>

        </div>

        <div className="w-full h-auto rounded-[20px] overflow-hidden flex-1 max-w-[400px] order-2">
          <Image
            src="/My Photo.jpg"
            alt="Image"
            width={900}
            height={900}
            className="w-full h-auto rounded-[20px] object-cover object-center scale-125 flex-1 max-w-[400px] order-2"
          />
        </div>

        <div className="block xl:hidden order-3 mt-8">
          <a href="/Mihai Mitrea CV.pdf" className="text-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block no-underline cursor-pointer">
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-x-hidden">
      <FirstImpression />
      <TextSection
        textComponents={[
          <HeaderAndText
            key="why-this-website"
            header={whyThisWebsite.header}
            paragraphs={whyThisWebsite.paragraphs}
          />,
          <HeaderAndText
            key="about-me"
            header={aboutMe.header}
            paragraphs={aboutMe.paragraphs}
          />,
          <HeaderAndText
            key="education"
            header={education.header}
            paragraphs={education.paragraphs}
          />,
        ]}
      />
    </main>
  );
}
