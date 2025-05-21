import { useId } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { tv } from "tailwind-variants";

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
}

export function TextInput({ name, label, placeholder }: TextInputProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          label={label}
          value={field.value}
          placeholder={placeholder}
          onChange={field.onChange}
          error={error}
        />
      )}
    />
  );
}

const input = tv({
  base: "mt-2 w-full rounded-xl border bg-neutral-900 px-4 py-3 text-base text-white transition-colors duration-300 placeholder:text-neutral-500 focus-visible:outline-none",
  variants: {
    error: {
      true: "border-red-400 focus-visible:border-red-400",
      false: "border-neutral-800 focus-visible:border-white",
    },
  },
});

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  error: { message: string } | undefined;
}

function Input({ label, value, placeholder, onChange, error }: InputProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-base font-medium text-white">
        {label}
      </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={input({ error: !!error })}
      />
      {error && (
        <p className="mt-2 text-sm font-normal text-red-400">{error.message}</p>
      )}
    </div>
  );
}
