import Hero from "@/components/Hero";
import Programmes from "@/components/programmes";
import Resources from "@/components/resources";
import Slideshow from "@/components/slideshow";
import Updated from "@/components/updated";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="py-[8%] bg-[#FBF9ED] px-3">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-stretch justify-evenly gap-12">
          <div className="w-[25%] flex flex-col flex-wrap text-center">
            <Icon
              icon={"ion:people-sharp"}
              fontSize={60}
              color="#540F0A"
              className="text-center mx-auto"
            />
            <div className="text-[16px]">
              <h1 className="mb-3.5">Who we are</h1>
              <p className="font-light">
                We are a youth-focused leadership development organization
                committed to raising leaders that will transform Africa.
              </p>
              <button className="mt-4 underline text-lg font-medium">
                Read More
              </button>
            </div>
          </div>
          <div className="w-[25%] flex flex-col flex-wrap text-center">
            <Icon
              icon={"ion:people-sharp"}
              fontSize={60}
              color="#540F0A"
              className="text-center mx-auto"
            />
            <div className="text-[16px]">
              <h1 className="mb-3.5">Who we are</h1>
              <p className="font-light">
                We are a youth-focused leadership development organization
                committed to raising leaders that will transform Africa.
              </p>
              <button className="mt-4 underline text-lg font-medium">
                Read More
              </button>
            </div>
          </div>
          <div className="w-[25%] flex flex-col flex-wrap text-center">
            <Icon
              icon={"ion:people-sharp"}
              fontSize={60}
              color="#540F0A"
              className="text-center mx-auto"
            />
            <div className="text-[16px]">
              <h1 className="mb-3.5">Who we are</h1>
              <p className="font-light">
                We are a youth-focused leadership development organization
                committed to raising leaders that will transform Africa.
              </p>
              <button className="mt-4 underline text-lg font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Friends Of Like Minds, Akabor Development Initiative */}
      <div className=" bg-[#FBF9ED] px-3 pb-[6%]">
        <div className="max-w-[950px] mx-auto flex items-center gap-x-12 justify-between w-full">
          <div className="w-[60%] pr-8">
            <h1 className="text-4xl font-bold">Making a difference together</h1>
            <p className="text-[16px] font-light my-4">
              We are a youth-focused leadership development organization
              committed to raising leaders that will transform Africa; through
              interventions for young people, that bridges the gap in
              leadership, education, employability and entrepreneurship. As a
              mission driven organization, we recognize that youth leadership
              and inclusion is critical to nation building and wealth creation.
            </p>
            <p className="text-[16px] font-light">
              Our cutting-edge programmatic thrusts inspire and equip young
              people, changing their mindset, to lead ethically and motivating
              them to deliver positive change in their communities; while also
              supporting social entrepreneurs to build systems and structures
              that are crucial for business sustainability, thereby contributing
              to livelihoods, social and national development.
            </p>
          </div>
          <div className="w-[40%]">
            <Image
              src={
                "https://leapafrica.org/wp-content/uploads/2024/01/IMG_9784-2048x1922-min.jpeg"
              }
              alt="heroImg"
              priority
              width={800}
              height={751}
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
      <Slideshow />
      <Programmes />
      <Resources />
      <div className="bg-[#FBF9ED] px-3 mx-auto flex justify-center">
        <div className="max-w-[1300px] mx-auto w-full rounded flex items-center justify-evenly h-36 bg-orange-300 font-semibold -translate-y-1/2 border text-lg">
          <div className="flex items-center gap-2 underline underline-offset-4">
            <p>Read our articles</p>
          </div>
          <div className="flex items-center gap-2 underline underline-offset-4">
            <p>View research papers</p>
          </div>
          <div className="flex items-center gap-2 underline underline-offset-4">
            <p>Explore reports</p>
          </div>
          <div className="flex items-center gap-2 underline underline-offset-4">
            <p>Listen to podcasts</p>
          </div>
          <div className="flex items-center gap-2 underline underline-offset-4">
            <p>Newsletter</p>
          </div>
        </div>
      </div>
      <Updated />
    </div>
  );
}
