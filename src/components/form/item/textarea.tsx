import { useId } from "react";
import { useFormContext, Controller } from "react-hook-form";
import * as Label from "@radix-ui/react-label";

import { cn } from "@/lib/cn";

import { inputVariants, errorVariants } from "./classes";

export interface Textarea {
  type: "textarea";
  name: string;
  label: string;
  placeholder: string;
  optional?: boolean;
}

export function TextareaView({ name, label, placeholder, optional }: Textarea) {
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
          <textarea
            id={id}
            placeholder={placeholder}
            className={cn(
              inputVariants({ error: Boolean(error) }),
              "min-h-20 resize-y",
            )}
            {...field}
          />
          {error && <span className={errorVariants()}>{error.message}</span>}
        </div>
      )}
    />
  );
}
