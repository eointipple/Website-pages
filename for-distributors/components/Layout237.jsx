"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Features</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Empowering Distributors with Essential Tools
            </h2>
            <p className="md:text-md">
              Our platform offers distributors the tools they need to succeed in
              the fast-paced alcohol market. With features designed for
              efficiency and accuracy, you can streamline your operations and
              enhance customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Real-Time Tracking for Enhanced Visibility
              </h3>
              <p>
                Stay informed with up-to-the-minute tracking of your shipments.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Comprehensive Inventory Management Solutions
              </h3>
              <p>Easily manage your stock levels and reduce waste.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Advanced Reporting Tools for Informed Decisions
              </h3>
              <p>
                Leverage detailed reports to optimize your distribution
                strategy.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
