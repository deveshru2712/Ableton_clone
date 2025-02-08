import React from "react";
import ReactPlayer from "react-player/lazy";

import {
  heroImage,
  ableton,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eight,
  ninth,
  tenth,
} from "../assets/images";

const Hero = () => {
  return (
    <div className="relative">
      {/* hero image container */}
      <div
        className="mx-28 mt-2 mb-28 min-h-screen bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <img
          src={ableton}
          alt="ableton_logo"
          className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* section-1 */}
      <div className="mx-72">
        <div className="flex flex-col items-center w-full">
          {/* paragraph1 */}
          <h1 className="flex flex-col items-center mb-6">
            <span className="w-full text-left text-3xl font-medium">
              We make{" "}
              <a href="#" className="text-darkBlue">
                Live
              </a>{" "}
              ,
              <a href="#" className="text-darkBlue">
                Push
              </a>{" "}
              ,
              <a href="#" className="text-darkBlue">
                Note
              </a>{" "}
              ,
              <a href="#" className="text-darkBlue">
                Move
              </a>{" "}
              and{" "}
              <a href="#" className="text-darkBlue">
                Link{" "}
              </a>{" "}
            </span>
            <span className="w-full text-left text-3xl font-medium">
              — unique software and hardware for music creation and performance.
            </span>
            <span className="w-full text-left text-3xl font-medium">
              {" "}
              With these products, our community of users creates
            </span>
            <span className="w-full text-left text-2xl font-medium">
              {" "}
              amazing things.
            </span>
          </h1>
          {/* paragraph2 */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-medium w-full">
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products
            </span>
            <span className="text-lg font-medium w-full">
              are used by a community of dedicated musicians, sound designers,
              and artists from across the
            </span>
            <span className="text-lg font-medium w-full">world.</span>
          </div>
        </div>
      </div>
      {/* section-2 */}
      <div className=" h-[1000px] my-24 relative">
        <div className="relative">
          <img
            src={second}
            alt="second_image"
            className="absolute ml-24 top-44 translate-x-1/4 z-10"
          />
        </div>
        <div className="bg-yellow h-[800px] w-[800px] absolute right-0 top-0">
          <img
            src={third}
            alt="third_image"
            className="absolute top-32 left-2 translate-y-1/2 translate-x-1/2"
          />
        </div>
      </div>
      {/* section-3 */}
      <div className="my-24">
        <div className="flex flex-col items-center w-full">
          <div>
            {/* paragraph1 */}
            <h1 className="flex flex-col items-center mb-6">
              <span className="w-full text-left text-3xl font-medium">
                Making music isn’t easy. It takes time, effort, and learning.
              </span>
              <span className="w-full text-left text-3xl font-medium">
                But when you’re in the flow, it’s incredibly rewarding.
              </span>
            </h1>
            {/* paragraph2 */}
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium w-full">
                We feel the same way about making Ableton products. The driving
                force behind Ableton is
              </span>
              <span className="text-lg font-medium w-full">
                our passion for what we make, and the people we make it for.
              </span>
              <span className="text-lg font-medium w-full">world.</span>
            </div>
          </div>
        </div>
      </div>
      {/* section-4 */}
      <div className="mx-72">
        <div className="w-full flex justify-center">
          <ReactPlayer
            url={"https://youtu.be/9SbnhgjeyXA"}
            playing={true}
            loop={true}
            controls={true}
          />
        </div>
      </div>
      {/* section-5 */}
      <div className="my-24">
        <div className="flex flex-col items-center w-full">
          <div>
            {/* paragraph1 */}
            <h1 className="flex flex-col items-center mb-6">
              <span className="w-full text-left text-3xl font-medium">
                We are more than 350 people from 30 different countries{" "}
              </span>
              <span className="w-full text-left text-3xl font-medium">
                divided between our headquarters in Berlin and our offices
              </span>
              <span className="w-full text-left text-3xl font-medium">
                in Los Angeles and Tokyo.
              </span>
            </h1>
            {/* paragraph2 */}
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium w-full">
                Most of us are active musicians, producers, and DJs, and many of
                us use Live and Push every
              </span>
              <span className="text-lg font-medium w-full">
                day. We come from a wide range of cultural and professional
                backgrounds. Some of us have
              </span>
              <span className="text-lg font-medium w-full">
                PhDs, some are self-taught, and most of us are somewhere in
                between. What connects us is
              </span>
              <span className="text-lg font-medium w-full">
                the shared belief that each of us has the skills and knowledge
                to contribute to something big:
              </span>
              <span className="text-lg font-medium w-full">
                helping to shape the future of music culture.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section-6 */}
      <div className=" h-[1000px] relative">
        <div className="bg-green h-[800px] w-[800px] absolute ">
          <img
            src={fourth}
            alt="fourth_image"
            className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={fifth}
            alt="fifth_image"
            className="absolute left-1/2 bottom-1/4 -translate-x-1/2 translate-y-1/2"
          />
        </div>
        <div className="relative">
          <img
            src={sixth}
            alt="sixth_image"
            className="absolute top-1/2 translate-y-1/4 right-40"
          />
        </div>
      </div>
      {/* section-7 */}
      <div className="mb-24">
        <div className="flex flex-col items-center w-full">
          <div>
            {/* paragraph1 */}
            <h1 className="flex flex-col items-center mb-6">
              <span className="w-full text-left text-3xl font-medium">
                We believe it takes focus to create truly outstanding{" "}
              </span>
              <span className="w-full text-left text-3xl font-medium">
                instruments. We only work on a few products and we strive{" "}
              </span>
              <span className="w-full text-left text-3xl font-medium">
                to make them great.{" "}
              </span>
            </h1>
            {/* paragraph2 */}
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium w-full">
                Rather than having a one-size-fits-all process, we try to give
                our people what they need to
              </span>
              <span className="text-lg font-medium w-full">
                work their magic and grow. We’ve learned that achieving the best
                results comes from
              </span>
              <span className="text-lg font-medium w-full">
                building teams that are richly diverse, and thus able to explore
                problems from a wider set of
              </span>
              <span className="text-lg font-medium w-full">
                perspectives. We don’t always agree with each other, but opinion
                and debate are valued
              </span>
              <span className="text-lg font-medium w-full">
                and openly encouraged.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section-8 */}
      <div className="mx-72">
        <img src={seventh} alt="seventh_image" className="object-cover" />
      </div>
      {/* section-9 */}
      <div className="m-24">
        <div className="flex flex-col items-center w-full">
          <div>
            {/* paragraph1 */}
            <h1 className="flex flex-col items-center mb-6">
              <span className="w-full text-left text-3xl font-medium">
                We’re passionate about what we do, but we’re equally
              </span>
              <span className="w-full text-left text-3xl font-medium">
                passionate about improving who we are.
              </span>
            </h1>
            {/* paragraph2 */}
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium w-full">
                We work hard to foster an environment where people can grow both
                personally and
              </span>
              <span className="text-lg font-medium w-full">
                professionally, and we strive to create a wealth of
                opportunities to learn from and with each
              </span>
              <span className="text-lg font-medium w-full">other.</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium w-full">
                Alongside an internal training program, employees are actively
                supported in acquiring new
              </span>
              <span className="text-lg font-medium w-full">
                knowledge and skills, and coached on applying these in their
                daily work. In addition, staff-
              </span>
              <span className="text-lg font-medium w-full">
                organized development and music salons are a chance to discuss
                new technologies,
              </span>
              <span className="text-lg font-medium w-full">
                production techniques and best practices.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section-10 */}
      <div className=" h-[1000px] relative">
        <div className="bg-purple h-[800px] w-[900px] absolute left-1/2 -translate-x-1/2 ">
          <img
            src={eight}
            alt="eight_image"
            className="absolute top-1/2 -left-1/4 translate-x-1/4 -translate-y-1/2"
          />
        </div>
        <div className="relative">
          <img
            src={ninth}
            alt="ninth_image"
            className=" object-cover absolute -right-1/4 top-1/2 -translate-x-3/4 translate-y-1/4"
          />
        </div>
      </div>
      {/* section-11 */}
      <div className="mb-24">
        <div className="flex flex-col items-center w-full">
          <div>
            {/* paragraph1 */}
            <h1 className="flex flex-col items-center mb-6">
              <span className="w-full text-left text-3xl font-medium">
                We want our employees to love it here. Since we’re looking
              </span>
              <span className="w-full text-left text-3xl font-medium">
                for exceptional talent from around the world, we will do
              </span>

              <span className="w-full text-left text-3xl font-medium">
                everything we can to make your transition as easy as
              </span>

              <span className="w-full text-left text-3xl font-medium">
                possible.{" "}
              </span>
            </h1>
            {/* paragraph2 */}

            <div className="flex flex-col items-center">
              <span className="text-lg font-medium w-full">
                If you're joining us in Berlin, we'll help with relocation and
                paperwork. We’ll even provide
              </span>
              <span className="text-lg font-medium w-full">
                you with free German or English lessons. Plus, working in
                Germany means you can expect
              </span>
              <span className="text-lg font-medium w-full">
                comprehensive health insurance for you and your family, as well
                as generous maternity and
              </span>
              <span className="text-lg font-medium w-full">
                paternity leave. Office hours are flexible, but it’s not all
                work; we have several company and
              </span>

              <span className="text-lg font-medium w-full">
                team outings throughout the year as well as a variety of fun,
                informal small-group activities.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section-12 */}
      <div className="mx-24 mb-24 h-[500px] flex items-center border border-b-2">
        <div className="w-1/2 h-full">
          <img
            src={tenth}
            alt="tenth_image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-lightBlue flex flex-col justify-between items-center gap-4 h-full w-1/2 p-28">
          <h1 className="flex flex-col items-center text-3xl font-medium">
            <span className="text-left w-full">We’re really proud of the</span>
            <span className="text-left w-full">
              work we’ve done so far. But
            </span>
            <span className="text-left w-full">
              there’s so much more to come.
            </span>
            <span className="text-left w-full">
              If you’d like to be a part of it,
            </span>
            <span className="text-left w-full">please join us.</span>
          </h1>
          <span className="text-2xl font-medium text-darkBlue w-full text-left pl-4">
            See Latest Jobs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
