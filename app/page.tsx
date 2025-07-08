import Image from "next/image";
import React from "react";
import TextSection, { HeaderAndText } from "./ui/text";

import { whyThisWebsite, aboutMe, education } from "./text/mainPage";

function FirstImpression() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-60 w-full px-20 py-16 bg-cadet-gray">
      <div className="flex-1 max-w-[700px] text-center md:text-left order-1 md:order-1">
        <h2 className="text-3xl md:text-4xl font-bold text-center xl:text-left mb-4">
          Hi, I&apos;m Mihai
        </h2>
        <p className="text-base xl:text-lg text-gray-700 text-left mb-6">
          I should write a short description about myself here, but I don&apos;t know what to write...
        </p>
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
