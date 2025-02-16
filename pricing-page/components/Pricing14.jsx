"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Flexible Pricing Options
          </h2>
          <p className="md:text-md">
            Choose the plan that fits your business needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Basic Plan
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    $19/mo
                  </h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Easy setup and management</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>24/7 customer support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Access to analytics tools</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Enterprise
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    Custom
                  </h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Advanced reporting features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Customizable branding options</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Multi-channel selling support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Priority customer service</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Integration with platforms</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Book a Call" className="w-full">
                  Book a Call
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Basic Plan
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    $180/yr
                  </h1>
                  <p className="mt-2 font-medium">
                    Save 20% with the annual plan
                  </p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Easy setup and management</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>24/7 customer support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Access to analytics tools</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Business Plan
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    $280/yr
                  </h1>
                  <p className="mt-2 font-medium">
                    Save 20% with the annual plan
                  </p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Advanced reporting features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Customizable branding options</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Multi-channel selling support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Priority customer service</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Integration with platforms</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
