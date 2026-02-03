import type React from "react";
import { useMenu } from "./Context";
import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

type MenuContainerProps = {
  buttonSize?: number;
  menuWidth?: number;
  menuRadius?: number;
  className?: string;
  children: React.ReactNode;
};

export function MenuContainer({
  buttonSize = 42,
  menuWidth = 160,
  menuRadius = 12,
  className,
  children,
}: MenuContainerProps) {
  const { open, direction, anchor } = useMenu();

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // auto height measurement
  useLayoutEffect(() => {
    if (!contentRef.current) return;
    const ro = new ResizeObserver(([e]) =>
      setContentHeight(e.contentRect.height),
    );
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  const width = open ? menuWidth : buttonSize;
  const height = open ? contentHeight : buttonSize;

  // direction offset
  const y =
    direction === "top"
      ? open
        ? -30
        : 0
      : direction === "bottom"
        ? open
          ? 30
          : 0
        : 0;

  // anchor alignment
  const x =
    anchor === "start"
      ? 0
      : anchor === "end"
        ? (buttonSize - menuWidth) / 2
        : buttonSize - menuWidth;

  return (
    <motion.div
      initial={false}
      animate={{ width, height, x, y }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8,
      }}
      className="absolute top-0 left-0"
    >
      {/* MASK */}
      <motion.div
        initial={false}
        animate={{ borderRadius: open ? menuRadius : buttonSize / 2 }}
        transition={{
          // delay radius change so eye never sees the snap
          duration: 0.001,
          delay: open ? 0.1 : 0,
        }}
        className={twMerge("w-full h-full overflow-hidden bg-white", className)}
      >
        {/* content wrapper for measuring */}
        <div ref={contentRef}>{children}</div>
      </motion.div>
    </motion.div>
  );
}
