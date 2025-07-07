import Image from "next/image";
import React from "react";
import TextSection, { HeaderAndText } from "./ui/text";

function FirstImpression() {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 w-full px-20 py-16 bg-cadet-gray">
          <div className="flex-1 max-w-[700px] text-center md:text-left order-1 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-center xl:text-left mb-4">
              Hi, I'm Mihai
            </h1>
            <p className="text-lg xl:text-xl text-gray-700 text-left mb-6">
              I should write a short description about myself here, but I don't know what to write...
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
      <FirstImpression/>
      <TextSection
        textComponents={[
          <HeaderAndText
            header="Why this website?"
            paragraphs={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ornare nisi, at finibus velit. Duis ac purus turpis. Duis urna nulla, porta ac arcu maximus, interdum mollis lacus. Proin imperdiet gravida sem. Curabitur iaculis vel neque non rutrum. In sed enim nec lectus lacinia laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum nec justo a auctor. Sed iaculis porta tristique. Donec bibendum odio finibus mauris condimentum, eu vehicula neque mattis. Curabitur a blandit velit. Duis at justo quis est consequat tincidunt. Nunc et malesuada urna. Curabitur dictum elit quis ex volutpat, nec molestie nulla commodo. Sed viverra dignissim nisi vitae faucibus.",
              "Sed mauris urna, eleifend sit amet eros ac, tempus euismod augue. Sed sodales dolor et orci accumsan luctus. Curabitur non libero ligula. Morbi imperdiet tempor ligula sed sagittis. Aliquam a congue nunc. Sed tincidunt cursus fermentum. Aliquam efficitur efficitur libero, non ultrices orci ultrices eget. Pellentesque dictum blandit ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vel congue turpis. Ut in lacus eu nisi dapibus varius venenatis id ipsum. Praesent bibendum magna at ultricies condimentum. Fusce gravida, mauris quis finibus viverra, arcu dolor varius felis, sollicitudin pretium metus quam in augue.",
              "Quisque iaculis mattis urna, vel pellentesque mauris finibus at. Vivamus rhoncus mauris a ullamcorper rhoncus. Sed varius augue dolor, vel venenatis ligula tincidunt molestie. Duis nisi nibh, aliquam fringilla aliquet non, sagittis et mauris. Etiam dictum diam ut cursus dignissim. Mauris lobortis mollis massa lacinia elementum. Ut vestibulum rhoncus neque, a viverra purus iaculis vitae. Aliquam lacus est, posuere eu tellus fermentum, efficitur blandit erat. Integer est nulla, porttitor ut pretium ac, condimentum ut lorem. Nunc id vestibulum tortor, ac imperdiet erat. Cras et velit in nulla tempus rutrum."
            ]}
          />,
          <HeaderAndText
            header="A bit about me"
            paragraphs={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ornare nisi, at finibus velit. Duis ac purus turpis. Duis urna nulla, porta ac arcu maximus, interdum mollis lacus. Proin imperdiet gravida sem. Curabitur iaculis vel neque non rutrum. In sed enim nec lectus lacinia laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum nec justo a auctor. Sed iaculis porta tristique. Donec bibendum odio finibus mauris condimentum, eu vehicula neque mattis. Curabitur a blandit velit. Duis at justo quis est consequat tincidunt. Nunc et malesuada urna. Curabitur dictum elit quis ex volutpat, nec molestie nulla commodo. Sed viverra dignissim nisi vitae faucibus.",
              "Sed mauris urna, eleifend sit amet eros ac, tempus euismod augue. Sed sodales dolor et orci accumsan luctus. Curabitur non libero ligula. Morbi imperdiet tempor ligula sed sagittis. Aliquam a congue nunc. Sed tincidunt cursus fermentum. Aliquam efficitur efficitur libero, non ultrices orci ultrices eget. Pellentesque dictum blandit ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vel congue turpis. Ut in lacus eu nisi dapibus varius venenatis id ipsum. Praesent bibendum magna at ultricies condimentum. Fusce gravida, mauris quis finibus viverra, arcu dolor varius felis, sollicitudin pretium metus quam in augue.",
              "Quisque iaculis mattis urna, vel pellentesque mauris finibus at. Vivamus rhoncus mauris a ullamcorper rhoncus. Sed varius augue dolor, vel venenatis ligula tincidunt molestie. Duis nisi nibh, aliquam fringilla aliquet non, sagittis et mauris. Etiam dictum diam ut cursus dignissim. Mauris lobortis mollis massa lacinia elementum. Ut vestibulum rhoncus neque, a viverra purus iaculis vitae. Aliquam lacus est, posuere eu tellus fermentum, efficitur blandit erat. Integer est nulla, porttitor ut pretium ac, condimentum ut lorem. Nunc id vestibulum tortor, ac imperdiet erat. Cras et velit in nulla tempus rutrum."
            ]}
          />,
        ]}
      />
    </main>
  );
}
