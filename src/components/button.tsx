import type { ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/utils";

const button = tv({
  base: "w-full cursor-pointer rounded-xl border px-6 py-2 text-base font-medium text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none active:opacity-80 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      primary: "border-transparent bg-blue-500",
      secondary: "border border-neutral-800 bg-neutral-900",
    },
  },
});

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary";
}

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={cn(button({ variant }), className)} {...props} />;
}
