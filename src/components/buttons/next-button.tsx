import type { ComponentPropsWithoutRef } from "react";

import { Button } from "../button";

interface NextButtonProps extends ComponentPropsWithoutRef<"button"> {
  submitting?: boolean;
}

export function NextButton({
  submitting = false,
  children,
  ...props
}: NextButtonProps) {
  return (
    <Button type="submit" variant="primary" disabled={submitting} {...props}>
      {submitting ? "Submitting..." : children}
    </Button>
  );
}
