"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout253() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Elevate</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unlock Your Brand's Potential with Digital Marketing
            </h2>
            <p className="md:text-md">
              Our tailored digital marketing campaigns empower alcohol brands to
              connect with consumers directly. Experience increased engagement
              and sales through innovative strategies designed for your unique
              needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Learn More</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Medium length section heading goes here
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Medium length section heading goes here
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Medium length section heading goes here
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Medium length section heading goes here
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
