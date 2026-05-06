import { cva } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "flex h-10 w-full items-center justify-center rounded-lg px-6 text-sm font-semibold outline-2 outline-transparent transition-all hover:outline-offset-2 hover:outline-gray-200 focus-visible:outline-offset-2 focus-visible:outline-gray-950 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-gray-950 text-white",
        secondary: "border border-gray-200 bg-white text-gray-950",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
