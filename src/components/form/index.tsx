import type { DefaultValues, Resolver } from "react-hook-form";

import { useForm, FormProvider } from "react-hook-form";

import { ItemView, type Item } from "./item";
import { Button } from "../button";

interface FormProps<T extends Record<string, unknown>> {
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
  heading: string;
  content: Item[];
  submit: string;
  onSubmit: (fields: T) => void;
}

export function Form<T extends Record<string, unknown>>({
  defaultValues,
  resolver,
  heading,
  content,
  submit,
  onSubmit,
}: FormProps<T>) {
  const form = useForm({ defaultValues, resolver });
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex h-screen w-full items-center justify-center px-4 py-8"
      autoComplete="off"
    >
      <FormProvider {...form}>
        <div className="w-full max-w-md">
          <h2 className="mb-6 text-center text-4xl font-bold text-gray-950">
            {heading}
          </h2>
          <div className="mb-6 flex flex-col gap-4">
            {content.map((field, index) => (
              <ItemView key={index} {...field} />
            ))}
          </div>
          <div className="flex gap-4">
            <Button type="submit" variant="primary">
              {submit}
            </Button>
          </div>
        </div>
      </FormProvider>
    </form>
  );
}
