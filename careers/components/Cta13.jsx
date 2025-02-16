"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            Join Our Dynamic Team Today
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            At Tipple, we are committed to fostering a vibrant culture that
            values innovation and collaboration. If you're passionate about
            making a difference in the alcohol industry, we want to hear from
            you!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Apply">Apply</Button>
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
