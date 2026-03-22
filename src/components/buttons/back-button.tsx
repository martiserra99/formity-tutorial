import type { ComponentPropsWithoutRef } from "react";

import { useFormContext } from "react-hook-form";

import { Button } from "../button";

interface BackButtonProps<T extends Record<string, unknown>>
  extends ComponentPropsWithoutRef<"button"> {
  onBack: (values: T) => void;
}

export function BackButton<T extends Record<string, unknown>>({
  onBack,
  ...props
}: BackButtonProps<T>) {
  const { getValues } = useFormContext<T>();
  return (
    <Button
      type="button"
      variant="secondary"
      onClick={() => onBack(getValues())}
      {...props}
    />
  );
}
