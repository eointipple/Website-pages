"use client";

import React from "react";

export function PortfolioHeader5() {
  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Project Manager
            </h1>
            <p className="md:text-md">
              Join our team as a Project Manager to drive innovative solutions
              in the alcohol industry.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Management
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Leadership
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Innovation
                </a>
              </li>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Client
              </h3>
              <p>Full name</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Date
              </h3>
              <p>March 2023</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Role
              </h3>
              <p>Role name</p>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Website
              </h3>
              <a href="#" className="underline">
                www.relume.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
