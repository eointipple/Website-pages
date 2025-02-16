"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";

const imageVariants = {
  initial: { x: 0, y: 0 },
  top: { y: 50, transition: { type: "spring", duration: 1, bounce: 0 } },
  bottom: { y: -50, transition: { type: "spring", duration: 1, bounce: 0 } },
  left: { x: 50, transition: { type: "spring", duration: 1, bounce: 0 } },
  right: { x: -50, transition: { type: "spring", duration: 1, bounce: 0 } },
};

const useHover = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [direction, setDirection] = useState("initial");

  const handleMouseEnter = (event) => {
    const element = event.currentTarget;
    if (!element) return;

    const { width: w, height: h, left, top } = element.getBoundingClientRect();
    const centerX = left + w / 2;
    const centerY = top + h / 2;
    const xOffset = event.clientX - centerX;
    const yOffset = event.clientY - centerY;
    const angleDegrees = Math.atan2(yOffset, xOffset) * (180 / Math.PI);
    const adjustedAngle = angleDegrees < 0 ? angleDegrees + 360 : angleDegrees;

    if (adjustedAngle >= 315 || adjustedAngle < 45) {
      setDirection("right");
    } else if (adjustedAngle >= 45 && adjustedAngle < 135) {
      setDirection("bottom");
    } else if (adjustedAngle >= 135 && adjustedAngle < 225) {
      setDirection("left");
    } else {
      setDirection("top");
    }
  };

  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getLinkHoverHandler = (index) => () => {
    setHoveredIndex(index);
  };

  const translateTopInverse = direction === "top" ? -50 : 0;
  const translateBottomInverse = direction === "bottom" ? 50 : 0;
  const translateLeftInverse = direction === "left" ? -50 : 0;
  const translateRightInverse = direction === "right" ? 50 : 0;

  const style = {
    translateX:
      cursorPosition.x - 300 + translateLeftInverse + translateRightInverse,
    translateY:
      cursorPosition.y - 300 + translateTopInverse + translateBottomInverse,
  };

  const getHeadingClassNames = (index) => {
    return clsx(
      "text-5xl font-bold transition-colors duration-300 md:text-9xl lg:text-10xl",
      {
        "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
        "lg:text-black": hoveredIndex === index || hoveredIndex === null,
      },
    );
  };

  const getOverlayClassNames = (index) => {
    return clsx(
      "pointer-events-none fixed inset-0 -z-10 hidden size-[600px] lg:block",
      {
        "opacity-100": hoveredIndex === index,
        "opacity-0": hoveredIndex !== index,
      },
    );
  };

  return {
    getHeadingClassNames,
    getOverlayClassNames,
    getLinkHoverHandler,
    direction,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    style,
  };
};

export function Cta37() {
  const hoverState = useHover();
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      onMouseMove={hoverState.handleMouseMove}
    >
      <div className="container max-w-xl text-center">
        <p className="mb-6 font-semibold md:mb-8">Tagline</p>
        <motion.div
          initial="initial"
          whileHover={hoverState.direction}
          onMouseEnter={hoverState.handleMouseEnter}
          onMouseLeave={hoverState.handleMouseLeave}
        >
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(0)}
            className="flex items-center justify-center p-4"
          >
            <h3 className={hoverState.getHeadingClassNames(0)}>
              Hover over link one
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(0)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                alt="Relume placeholder image 1"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(1)}
            className="flex items-center justify-center p-4"
          >
            <h3 className={hoverState.getHeadingClassNames(1)}>
              Hover over link two
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(1)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                alt="Relume placeholder image 2"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(2)}
            className="flex items-center justify-center p-4"
          >
            <h3 className={hoverState.getHeadingClassNames(2)}>
              Hover over link three
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(2)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                alt="Relume placeholder image 3"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(3)}
            className="flex items-center justify-center p-4"
          >
            <h3 className={hoverState.getHeadingClassNames(3)}>
              Hover over link four
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(3)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                alt="Relume placeholder image 4"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
