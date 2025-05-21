import type { ComponentPropsWithoutRef } from "react";

import { useFormContext } from "react-hook-form";

import { Button } from "../button";

interface BackButtonProps extends ComponentPropsWithoutRef<"button"> {
  onBack: (values: object) => void;
}

export function BackButton({ onBack, ...props }: BackButtonProps) {
  const { getValues } = useFormContext();
  return (
    <Button
      type="button"
      variant="secondary"
      onClick={() => onBack(getValues())}
      {...props}
    />
  );
}
