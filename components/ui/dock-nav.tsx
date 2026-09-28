import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const DOCK_DURATION = 0.35;
const DOCK_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const DOCK_WIDTH = {
  base: "3.75rem",
  far: "4.5rem",
  close: "5.25rem",
  active: "5.75rem",
} as const;

export interface DockNavItem {
  alt?: string;
  href?: string;
  icon?: React.ReactNode;
  iconSrc?: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface DockNavProps extends React.HTMLAttributes<HTMLElement> {
  align?: "center" | "start" | "end";
  duration?: number;
  items: DockNavItem[];
}

function getItemWidth(index: number, hoveredIndex: number | null) {
  if (hoveredIndex === null) {
    return DOCK_WIDTH.base;
  }
  const diff = Math.abs(hoveredIndex - index);
  if (diff === 0) {
    return DOCK_WIDTH.active;
  }
  if (diff === 1) {
    return DOCK_WIDTH.close;
  }
  if (diff === 2) {
    return DOCK_WIDTH.far;
  }
  return DOCK_WIDTH.base;
}

export function DockNav({
  align = "center",
  className,
  duration = DOCK_DURATION,
  items,
  ...props
}: DockNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration,
        ease: DOCK_EASE,
      };

  return (
    <nav className={cn("w-full max-w-full", className)} {...props}>
      {/* Mobile refined horizontal pills */}
      <div className="flex sm:hidden overflow-x-auto no-scrollbar py-1 px-1 -mx-1 gap-1.5 items-center">
        {items.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              if (item.onClick) item.onClick();
              else if (item.href) window.location.hash = item.href;
            }}
            className={cn(
              "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all select-none border min-h-[34px] shadow-2xs",
              item.active
                ? "bg-[#2A2523] text-white border-[#2A2523] shadow-xs"
                : "bg-white/95 text-stone-700 border-stone-200/80 hover:bg-white"
            )}
          >
            <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
              {item.icon}
            </span>
            <span className="whitespace-nowrap">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Desktop / Tablet macOS Magnification Dock (Sleek & refined) */}
      <div className="hidden sm:flex justify-center">
        <ul className="mb-0 flex list-none flex-row items-end justify-center p-1 text-xs gap-1 bg-[#FAF7F2]/95 backdrop-blur-md rounded-2xl border border-stone-200/70 shadow-sm w-fit">
          {items.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const itemKey = `${item.label}-${item.href ?? index}`;

            return (
              <motion.li
                animate={{ width: getItemWidth(index, hoveredIndex) }}
                className="relative flex items-center justify-center shrink-0"
                initial={false}
                key={itemKey}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={transition}
              >
                <button
                  type="button"
                  className={cn(
                    "relative z-[1] flex h-12 w-full flex-col items-center justify-center p-1.5 rounded-xl transition-colors cursor-pointer select-none",
                    item.active
                      ? "bg-[#2A2523] text-white shadow-xs"
                      : "hover:bg-stone-200/50 text-stone-700 hover:text-stone-900"
                  )}
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    else if (item.href) window.location.hash = item.href;
                  }}
                >
                  <span className={item.active ? "text-[#EFE4DC]" : ""}>
                    <span className="h-4 w-4 flex items-center justify-center text-current">
                      {item.icon}
                    </span>
                  </span>
                  <span className="text-[10px] tracking-tight truncate max-w-full font-serif mt-0.5">
                    {item.label}
                  </span>
                </button>

                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? "-125%" : "-80%",
                    scale: isHovered ? 1 : 0.95,
                  }}
                  className="pointer-events-none absolute top-0 z-20 whitespace-nowrap rounded-md bg-[#2A2523] px-2 py-0.5 text-[10px] font-medium text-white shadow-md"
                  initial={false}
                  transition={transition}
                >
                  {item.label}
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default DockNav;
