"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout246() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Transform Your Visitor Experience with Tipple's Innovative
              Solutions
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Enhance the visitor experience at your distillery or winery by
              offering seamless point-of-sale options. With Tipple, guests can
              purchase directly and have their selections shipped home, ensuring
              convenience and satisfaction. This not only elevates their visit
              but also fosters brand loyalty.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Unlock New Sales Opportunities with Direct-to-Consumer Sales
            </h3>
            <p>
              Increase your revenue potential by tapping into direct sales
              channels.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Streamline Your Operations for Maximum Efficiency
            </h3>
            <p>
              Tipple simplifies compliance and logistics, allowing you to focus
              on your craft.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sign Up
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Boost Your Brand Visibility and Customer Engagement
            </h3>
            <p>
              Create memorable experiences that resonate with your audience and
              enhance brand recognition.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Discover
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
