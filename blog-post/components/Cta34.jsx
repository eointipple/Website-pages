"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Stay Updated with Tipple
            </h2>
            <p className="md:text-md">
              Join our community for the latest insights and updates on the
              alcohol industry.
            </p>
            <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
              <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input id="email" type="email" placeholder="Enter your email" />
                <Button
                  title="Sign up"
                  variant="primary"
                  size="sm"
                  className="items-center justify-center px-6 py-3"
                >
                  Sign up
                </Button>
              </form>
              <p className="text-xs">
                By clicking Sign Up you're confirming that you agree with our
                Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-2">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 1"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 2"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 2"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 3"
            className="max-h-12 md:max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 3"
            className="max-h-12 md:max-h-14"
          />
        </div>
      </div>
    </section>
  );
}
