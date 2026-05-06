import { useId } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import * as Label from "@radix-ui/react-label";
import * as RadixSelect from "@radix-ui/react-select";

import { cn } from "@/lib/cn";

import { inputVariants, errorVariants } from "./classes";

export interface Select {
  type: "select";
  name: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  optional?: boolean;
}

export function SelectView({
  name,
  label,
  placeholder,
  options,
  optional,
}: Select) {
  const id = useId();
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <Label.Root
            htmlFor={id}
            className="block text-xs font-bold tracking-wider text-gray-500 uppercase"
          >
            <>{label}</>
            {optional && (
              <span className="text-xs font-normal tracking-normal text-gray-400 normal-case">
                {" "}
                — optional
              </span>
            )}
          </Label.Root>
          <RadixSelect.Root value={field.value} onValueChange={field.onChange}>
            <RadixSelect.Trigger
              id={id}
              className={cn(
                inputVariants({ error: Boolean(error) }),
                "flex cursor-pointer items-center justify-between data-placeholder:text-gray-400",
              )}
            >
              <RadixSelect.Value placeholder={placeholder} />
              <RadixSelect.Icon asChild>
                <ChevronDown
                  size={14}
                  className="shrink-0 text-gray-400 transition-transform duration-150 group-data-[state=open]:rotate-180"
                />
              </RadixSelect.Icon>
            </RadixSelect.Trigger>
            <RadixSelect.Portal>
              <RadixSelect.Content
                position="popper"
                sideOffset={4}
                className="z-50 w-(--radix-select-trigger-width) overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <RadixSelect.Viewport className="p-1">
                  {options.map((option) => (
                    <RadixSelect.Item
                      key={option.value}
                      value={option.value}
                      className="relative flex cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-950 outline-none select-none data-disabled:pointer-events-none data-disabled:text-gray-400 data-highlighted:bg-gray-100"
                    >
                      <RadixSelect.ItemText>
                        {option.label}
                      </RadixSelect.ItemText>
                    </RadixSelect.Item>
                  ))}
                </RadixSelect.Viewport>
              </RadixSelect.Content>
            </RadixSelect.Portal>
          </RadixSelect.Root>
          {error && <span className={errorVariants()}>{error.message}</span>}
        </div>
      )}
    />
  );
}
