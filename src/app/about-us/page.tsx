import OurApproach from "@/components/About/our-approach";
import Image from "next/image";
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="">
      <div className="max-w-[1100px] mx-auto pt-[6%] pb-[6%]">
        <div className="flex items-center justify-between">
          <div className="w-[55%]">
            <h1 className="text-4xl font-bold mb-8">About LEAP Africa</h1>
            <p className="text-[16px] font-light">
              LEAP Africa is a youth-focused leadership development organization
              committed to raising leaders who will transform Africa; through
              interventions for young people, that bridges the gap in five
              areas: Education, Entrepreneurship, Employability, Active
              Citizenship and Health and Wellbeing (3Es+AH). As a mission driven
              organization, we recognize that youth leadership and inclusion is
              critical to nation building and wealth creation. Our cutting-edge
              programmatic thrusts inspire and empower young people, changing
              their mindset, to lead ethically and motivating them to deliver
              positive change in their communities; while also supporting social
              entrepreneurs to build systems and structures that are crucial for
              business sustainability, thereby contributing to individual,
              social and national development. Through these areas we drive
              upward social mobility. Our core and special programmes aim to
              tackle problems across these five programmatic focus areas; each
              programme aims to solve one or more of these challenges at a time.
              LEAP Africa actively contributes to the body of knowledge
              leveraging our strategic direction of ecosystem building, thought
              leadership and advocacy.
            </p>
          </div>
          <div className="">
            <Image
              src={
                "https://leapafrica.org/wp-content/uploads/2024/01/IMG_9784-2048x1922-min.jpeg"
              }
              alt="hands"
              width={400}
              height={400}
              className="rounded-xl size-[400px]"
            />
          </div>
        </div>

        <div className="border-4 border-orange-300 mt-24 rounded-xl py-10 px-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          cupiditate at rem enim, eum consequuntur dignissimos eos veniam a
          ullam ea debitis? Iste, corrupti officia. Ullam quas delectus nam
          molestiae!
        </div>
      </div>
      <OurApproach />
    </div>
  );
}
