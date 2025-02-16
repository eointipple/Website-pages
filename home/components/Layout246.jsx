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
              Unlock Your Brand's Potential with Tipple's Comprehensive
              Solutions for Alcohol Sales
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Tipple simplifies the process of selling alcohol directly to
              consumers and businesses. With our user-friendly platform, you can
              effortlessly navigate the complexities of compliance and
              logistics. Expand your market reach globally while we handle the
              details.
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
              Experience Seamless Global Reach with Tipple's Innovative
              Infrastructure for Alcohol Brands
            </h3>
            <p>
              Connect with customers worldwide and grow your brand effortlessly.
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
              Stay Compliant with Tipple's Expert Handling of Legal and Tax
              Requirements
            </h3>
            <p>Let us manage compliance, so you can focus on your business.</p>
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
              Enjoy Effortless Logistics with Tipple's Streamlined Shipping and
              Delivery Solutions
            </h3>
            <p>
              We ensure your products reach customers quickly and efficiently.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
