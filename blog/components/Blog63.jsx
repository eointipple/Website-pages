"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Blog63() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:mb-20 lg:grid-cols-2 lg:gap-x-20">
          <div className="rb-12 flex flex-col md:items-end md:justify-between">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Blog</p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Insights on Alcohol Trends
              </h1>
              <p className="md:text-md">
                Explore the latest in the alcohol industry.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-start md:mt-8">
                <Button title="View all" variant="secondary">
                  View all
                </Button>
              </div>
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:gap-y-16">
            <div>
              <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                <a
                  href="#"
                  className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex w-full flex-col justify-center">
                  <div className="mb-2">
                    <p className="inline-block text-sm font-semibold">Trends</p>
                  </div>
                  <a href="#" className="mb-2">
                    <h3 className="text-xl font-bold md:text-2xl">
                      The Rise of Craft Beverages
                    </h3>
                  </a>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim...
                  </p>
                  <div className="mt-5 flex items-center md:mt-6">
                    <div className="mr-4 flex-shrink-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder avatar"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">Jane Doe</h6>
                      <div className="flex items-center">
                        <p className="text-sm">11 Jan 2022</p>
                        <span className="mx-2">•</span>
                        <p className="text-sm">5 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                <a
                  href="#"
                  className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex w-full flex-col justify-center">
                  <div className="mb-2">
                    <p className="inline-block text-sm font-semibold">
                      Innovation
                    </p>
                  </div>
                  <a href="#" className="mb-2">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Sustainable Practices in Alcohol Production
                    </h3>
                  </a>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim...
                  </p>
                  <div className="mt-5 flex items-center md:mt-6">
                    <div className="mr-4 flex-shrink-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder avatar"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">John Smith</h6>
                      <div className="flex items-center">
                        <p className="text-sm">15 Feb 2022</p>
                        <span className="mx-2">•</span>
                        <p className="text-sm">6 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                <a
                  href="#"
                  className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex w-full flex-col justify-center">
                  <div className="mb-2">
                    <p className="inline-block text-sm font-semibold">
                      Regulations
                    </p>
                  </div>
                  <a href="#" className="mb-2">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Navigating Alcohol Distribution Laws
                    </h3>
                  </a>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim...
                  </p>
                  <div className="mt-5 flex items-center md:mt-6">
                    <div className="mr-4 flex-shrink-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder avatar"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">Emily White</h6>
                      <div className="flex items-center">
                        <p className="text-sm">20 Mar 2022</p>
                        <span className="mx-2">•</span>
                        <p className="text-sm">7 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
