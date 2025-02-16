"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Choose</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Options
          </h1>
          <p className="md:text-md">
            Explore our flexible pricing tailored for your needs.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
            <div className="hidden md:block" />
            <div className="flex h-full flex-col justify-between text-center">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Basic
                </h2>
                <p className="my-3 text-2xl font-bold leading-[1.2] sm:text-6xl md:my-4 md:text-9xl lg:text-10xl">
                  $19/mo
                </p>
                <p>Ideal for startups and individuals.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between text-center">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Business
                </h2>
                <p className="my-3 text-2xl font-bold leading-[1.2] sm:text-6xl md:my-4 md:text-9xl lg:text-10xl">
                  $29/mo
                </p>
                <p>Perfect for growing companies.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between text-center">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Enterprise
                </h2>
                <p className="my-3 text-2xl font-bold leading-[1.2] sm:text-6xl md:my-4 md:text-9xl lg:text-10xl">
                  $49/mo
                </p>
                <p>Best for large organizations.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
            Feature Comparison
          </h3>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Users Supported
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              10
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              25
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Dedicated Support
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Advanced Analytics Tools
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Custom Integrations Available
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Priority Response Times
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
            Feature Highlights
          </h3>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Real-Time Data Access
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              10
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              25
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Custom Reporting Features
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Enhanced Security Protocols
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Multi-User Access
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              API Access
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
            Key Benefits
          </h3>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Scalable Solutions
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              10
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              25
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Flexible Payment Options
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Tailored Onboarding Process
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Ongoing Training Provided
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Regular Feature Updates
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="rt-8 mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
            <div className="hidden md:block" />
            <Button
              title="Get started"
              className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
            >
              Get started
            </Button>
            <Button
              title="Get started"
              className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
            >
              Get started
            </Button>
            <Button
              title="Get started"
              className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
