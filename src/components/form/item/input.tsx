import { useId } from "react";
import { useFormContext, Controller } from "react-hook-form";
import * as Label from "@radix-ui/react-label";

import { inputVariants, errorVariants } from "./classes";

export interface Input {
  type: "input";
  name: string;
  label: string;
  placeholder: string;
  optional?: boolean;
}

export function InputView({ name, label, placeholder, optional }: Input) {
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
          <input
            id={id}
            placeholder={placeholder}
            className={inputVariants({ error: Boolean(error) })}
            {...field}
          />
          {error && <span className={errorVariants()}>{error.message}</span>}
        </div>
      )}
    />
  );
}
