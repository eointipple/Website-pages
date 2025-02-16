"use client";

import React from "react";

export function Layout27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Celebrating Our Milestones: Transforming the Alcohol Industry
              Together
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              At Tipple, we've revolutionized the way alcohol brands connect
              with consumers. Our innovative solutions have empowered countless
              businesses to thrive in a competitive market.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Success
                </h3>
                <p>Over 1,000 brands trust us for compliance.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Growth
                </h3>
                <p>Achieved 200% revenue growth in the past year.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
