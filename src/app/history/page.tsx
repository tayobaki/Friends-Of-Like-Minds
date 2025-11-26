import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto pt-[6%] pb-[6%]">
        <div className="flex items-center justify-between">
          <div className="w-[49%]">
            <h1 className="text-4xl font-bold mb-8">History</h1>
            <p className="text-sm font-light">
              There is a widespread recognition that leadership skills are
              crucial for individual and organizational success, wealth
              creation, and nation-building. As a result, over the past 40
              years, numerous leadership institutes and centers have emerged to
              support entrepreneurs and managers across different sectors and
              young people in various spheres of development.
            </p>
            <p className="text-sm font-light mt-5">
              Leadership, Effectiveness, Accountability & Professionalism (LEAP)
              Africa was founded by Ndidi Okonkwo Nwuneli in 2002 to fill this
              important gap in Africa. Over two decades since it was
              established, LEAP Africa has maintained its commitment to
              addressing the crisis of leadership in Africa by facilitating
              values-driven leadership programmes for personal, organizational
              and community transformation.
            </p>
          </div>
          <div className="w-[45%]">
            <Image
              src={
                "https://leapafrica.org/wp-content/uploads/2024/03/Ndidi-Okonkwo-Nwuneli.webp"
              }
              alt="aboutImag"
              width={500}
              height={600}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-14 flex-row-reverse">
          <div className="w-[49%]">
            <p className="text-sm font-light">
              LEAP Africa’s work has been built on the premise that Africa’s
              transformation rests on young dynamic, innovative, ethical leaders
              and entrepreneurs. We believe that young people’s creativity and
              energy must be harnessed in order to create positive and lasting
              change.
              <br />
              <br />
              Our cutting-edge programmes inspire and equip young people to lead
              ethically and motivates them to deliver positive change in their
              communities. We also support social entrepreneurs to build systems
              and structures that are crucial for impact and sustainability,
              thereby contributing to improved livelihoods and social and
              national development.
              <br />
              <br />
              Driven by our mission, we are constantly expanding our programmes,
              equipping young people to deal with their current realities and
              preparing them for the future. With footprints in over 26 states
              in Nigeria and recent programming in eight African countries, LEAP
              Africa is raising leaders that will transform Africa.
            </p>
          </div>
          <div className="w-[45%]">
            <Image
              src={
                "https://leapafrica.org/wp-content/uploads/2024/03/Ndidi-Okonkwo-Nwuneli.webp"
              }
              alt="aboutImag"
              width={500}
              height={600}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#540F0A] px-3 py-[8%] text-white">
        <div className="max-w-[990px] mx-auto w-full flex flex-col gap-10 items-center justify-center text-center">
          <h1 className="text-3xl font-bold">
            What makes LEAP Africa stand out?
          </h1>
          <p>
            In order for individuals to acquire leadership skills, they need
            first-hand experiences and long-term support. As a result, LEAP
            Africa ensures that our programme participants are immersed in a
            practical learning environment. Our curriculum consists of case
            studies, interactive exercises, games and breakout discussions.
            <br />
            <br />
            Beyond the training programmes, LEAP Africa motivates and inspires
            its participants through one-on-one coaching sessions. LEAP Africa’s
            success is linked to the practical changes that our beneficiaries
            are able to make in their lives, their organizations and
            communities.
            <br />
            <br />
            LEAP Africa actively monitors the progress of its participants, as
            they strive to become change leaders in Africa. LEAP Africa works in
            partnership with other leading private sector, nonprofit and
            community-based organizations and educational institutions.
          </p>
        </div>
      </div>
      <div className=" px-3 py-[8%] text-black">
        <div className="max-w-[990px] mx-auto w-full flex flex-col gap-5 items-center justify-center">
          <div className="text-center">
            <Image
              src={
                "https://leapafrica.org/wp-content/uploads/2024/03/Ndidi-Okonkwo-Nwuneli.webp"
              }
              alt="aboutImag"
              width={500}
              height={600}
              className="rounded-xl w-[30%] mx-auto"
            />
            <div className="mt-5">
              <h1 className="font-bold text-4xl mb-5">2002</h1>
              <p className="text-[16px] font-light">
                LEAP Africa was founded by Ndidi Okonkwo Nwuneli.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={
                "https://leapafrica.org/wp-content/uploads/2024/02/LEAP-Africa-history-timeline-2.webp"
              }
              alt="transitionImage"
              width={342}
              height={600}
              className="w-[45%] mx-auto"
            />
          </div>
          <div className="border-4 border-[#FBA835] rounded-xl p-4 flex items-center justify-between gap-6">
            <Image
              src={
                "https://leapafrica.org/wp-content/uploads/2024/05/2002-2007.webp"
              }
              alt="image2"
              width={400}
              height={400}
              className="rounded-xl"
            />

            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold">2002 - 2007</h1>
              <ul className="font-light text-[16px] space-y-3">
                <li>Pioneered our youth and business leadership programmes in partnership with the Ford Foundation, and the International Youth Foundation.</li>
                <li>Pioneered our youth and business leadership programmes in partnership with the Ford Foundation, and the International Youth Foundation.</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
