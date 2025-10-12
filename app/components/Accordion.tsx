import React, { memo, useState, useCallback } from "react";
import clsx from "clsx";

type AccordionProps = {
  title: string;
  color?: string;
  children: React.ReactNode;

  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
};

const colorStyles: Record<string, string> = {
  blue: "border-blue-700 bg-blue-900",
  green: "border-green-700 bg-green-800",
  red: "border-red-700 bg-red-800",
  gray: "border-gray-700 bg-gray-800",
  slate: "border-slate-600 bg-slate-700",
  yellow: "border-yellow-600 bg-yellow-700",
};

export const Accordion = memo(function Accordion({
  title,
  children,
  color = "gray",
  open: openProp,
  onOpenChange,
  defaultOpen = false,
}: AccordionProps) {
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? (openProp as boolean) : uncontrolledOpen;

  const handleToggle = useCallback((next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  }, [isControlled, onOpenChange]);

  return (
    <div className="space-y-4">
      <details
        open={open}
        onToggle={(e) => handleToggle((e.currentTarget as HTMLDetailsElement).open)}
        className={clsx("border-s-4 p-4", colorStyles[color] ?? colorStyles.gray)}
      >
        <summary className="flex items-center justify-between gap-1.5 text-white cursor-pointer">
          <h2 className="text-lg font-medium">{title}</h2>
          <svg
            className={`size-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>

        <div>{children}</div>
      </details>
    </div>
  );
});

export default Accordion;
