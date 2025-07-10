import Image from "next/image";
import React from "react";
import TextSection, { HeaderAndText } from "./ui/text";

import { whyThisWebsite, aboutMe, education } from "./text/mainPage";

function FirstImpression() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-60 w-full px-20 py-16 bg-cadet-gray">
      <div className="order-1 md:order-1">
        <div className="flex-1 max-w-[700px] text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm Mihai Mitrea
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Welcome to my personal website! Here you can find out more about me,
            my projects, and what I am up to.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-[400px] order-2 md:order-2">
        <Image
          src="/cat.jpg"
          alt="Image"
          width={900}
          height={900}
          className="w-full h-auto rounded-[20px] object-contain"
        />
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
