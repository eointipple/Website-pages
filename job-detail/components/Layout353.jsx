"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout353() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Medium length section heading goes here
            </h2>
            <p className="md:text-md">
              At Tipple, we prioritize the well-being of our employees by
              providing comprehensive health insurance and retirement plans.
              Enjoy a range of perks designed to enhance your work-life balance
              and overall job satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary">
                Button
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
          <div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "30%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Subheading one
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "32%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Subheading two
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "34%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Subheading three
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "36%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Subheading four
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
