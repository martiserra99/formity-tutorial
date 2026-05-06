import { useFormContext, Controller } from "react-hook-form";
import * as Label from "@radix-ui/react-label";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { cva } from "class-variance-authority";

import { errorVariants } from "./classes";

const itemVariants = cva(
  "flex h-10 w-full cursor-pointer items-center justify-center rounded-lg border text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-gray-400/15 data-[state=on]:border-gray-950 data-[state=on]:bg-gray-950 data-[state=on]:text-white",
  {
    variants: {
      error: {
        false: "border-gray-200 bg-white text-gray-950 hover:border-gray-300",
        true: "border-red-300 bg-white text-gray-950 hover:border-red-400",
      },
    },
  },
);

export interface MultiSelect {
  type: "multi-select";
  name: string;
  label: string;
  options: { value: string; label: string }[];
  optional?: boolean;
}

export function MultiSelectView({
  name,
  label,
  options,
  optional,
}: MultiSelect) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <Label.Root className="block text-xs font-bold tracking-wider text-gray-500 uppercase">
            {label}
            {optional && (
              <span className="text-xs font-normal tracking-normal text-gray-400 normal-case">
                {" "}
                — optional
              </span>
            )}
          </Label.Root>
          <ToggleGroup.Root
            type="multiple"
            value={field.value}
            onValueChange={field.onChange}
            className="grid w-full grid-cols-2 gap-2"
          >
            {options.map((option) => (
              <ToggleGroup.Item
                key={option.value}
                value={option.value}
                className={itemVariants({ error: Boolean(error) })}
              >
                {option.label}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>
          {error && <span className={errorVariants()}>{error.message}</span>}
        </div>
      )}
    />
  );
}
