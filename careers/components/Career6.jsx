"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Career6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-[0.75fr_1fr] lg:gap-x-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Careers</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Job Openings
            </h2>
            <p className="md:text-md">
              Join our dynamic team at Tipple and help shape the future of the
              alcohol industry.
            </p>
          </div>
          <Accordion type="multiple">
            <AccordionItem value="item-1" className="first:border-t-0">
              <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Marketing Team
              </AccordionTrigger>
              <AccordionContent className="mb-6 flex flex-col gap-6 pb-0 md:mb-8 md:gap-8">
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Marketing Manager
                      </h3>
                      <p className="md:text-md">Remote</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    As a Marketing Manager, you will lead campaigns that drive
                    brand awareness and customer engagement. Collaborate with
                    cross-functional teams to create innovative strategies. If
                    you're passionate about marketing in the alcohol industry,
                    we want to hear from you!
                  </p>
                </div>
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Sales Associate
                      </h3>
                      <p className="md:text-md">Onsite</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    Join our sales team as a Sales Associate and connect with
                    clients directly. Your role will involve building
                    relationships and promoting our unique offerings. If you
                    have a knack for sales and a love for the alcohol industry,
                    this is the role for you!
                  </p>
                </div>
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Data Analyst
                      </h3>
                      <p className="md:text-md">Hybrid</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    As a Data Analyst, you'll analyze market trends and consumer
                    behavior to inform business decisions. Your insights will
                    help drive our strategic initiatives. If you have a passion
                    for data and the alcohol industry, we invite you to apply!
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="first:border-t-0">
              <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Tech Department
              </AccordionTrigger>
              <AccordionContent className="mb-6 flex flex-col gap-6 pb-0 md:mb-8 md:gap-8">
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Software Engineer
                      </h3>
                      <p className="md:text-md">Remote</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    Join us as a Software Engineer and contribute to building
                    innovative solutions for our platform. You'll work with a
                    talented team to enhance user experience and streamline
                    operations. If you're excited about technology in the
                    alcohol industry, we want you on our team!
                  </p>
                </div>
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Customer Support
                      </h3>
                      <p className="md:text-md">Onsite</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    As a Customer Support Specialist, you'll be the first point
                    of contact for our clients. Your role is crucial in ensuring
                    customer satisfaction and resolving inquiries. If you enjoy
                    helping others and have a passion for the alcohol industry,
                    apply today!
                  </p>
                </div>
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Creative Director
                      </h3>
                      <p className="md:text-md">Remote</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    As a Creative Director, you'll lead the vision for our
                    brand's creative strategy. Collaborate with various teams to
                    produce compelling content that resonates with our audience.
                    If you're a creative thinker with a passion for the alcohol
                    industry, we want to hear from you!
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="first:border-t-0">
              <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Finance Team
              </AccordionTrigger>
              <AccordionContent className="mb-6 flex flex-col gap-6 pb-0 md:mb-8 md:gap-8">
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Financial Analyst
                      </h3>
                      <p className="md:text-md">Remote</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    Join our Finance Team as a Financial Analyst and help us
                    navigate the financial landscape of the alcohol industry.
                    Your insights will guide strategic decisions and ensure
                    compliance. If you have a strong analytical mindset, we
                    encourage you to apply!
                  </p>
                </div>
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        Operations Manager
                      </h3>
                      <p className="md:text-md">Hybrid</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    As an Operations Manager, you will oversee the logistics and
                    compliance aspects of our business. Your role is vital in
                    ensuring smooth operations across all departments. If you're
                    an organized leader with a passion for the alcohol industry,
                    apply now!
                  </p>
                </div>
                <div className="border border-border-primary p-6 md:p-8">
                  <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold md:text-2xl">
                        HR Specialist
                      </h3>
                      <p className="md:text-md">Remote</p>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        <a href="#">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <p className="max-w-lg">
                    Join us as an HR Specialist to foster a positive workplace
                    culture. Your role will involve recruitment, training, and
                    employee engagement initiatives. If you're passionate about
                    people and the alcohol industry, we want you on our team!
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
