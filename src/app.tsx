import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  FormStep,
  FormStepContent,
  FormStepHeading,
  FormStepInputs,
  FormStepRow,
} from "./components/form-step";

import { TextInput } from "./components/input/text-input";
import { NumberInput } from "./components/input/number-input";
import { NextButton } from "./components/buttons/next-button";
import { Output } from "./components/output";

export default function App() {
  const [output, setOutput] = useState<object | null>(null);

  const onSubmit = useCallback((output: object) => {
    setOutput(output);
  }, []);

  if (output) {
    return <Output output={output} onStart={() => setOutput(null)} />;
  }

  return (
    <FormStep
      defaultValues={{
        name: "",
        surname: "",
        age: 20,
      }}
      resolver={zodResolver(
        z.object({
          name: z
            .string()
            .min(1, { message: "Required" })
            .max(20, { message: "Must be at most 20 characters" }),
          surname: z
            .string()
            .min(1, { message: "Required" })
            .max(20, { message: "Must be at most 20 characters" }),
          age: z
            .number()
            .min(18, { message: "Minimum of 18 years old" })
            .max(99, { message: "Maximum of 99 years old" }),
        }),
      )}
      onSubmit={onSubmit}
    >
      <FormStepContent>
        <FormStepHeading>Tell us about yourself</FormStepHeading>
        <FormStepInputs>
          <FormStepRow>
            <TextInput name="name" label="Name" placeholder="Your name" />
            <TextInput
              name="surname"
              label="Surname"
              placeholder="Your surname"
            />
          </FormStepRow>
          <NumberInput name="age" label="Age" placeholder="Your age" />
        </FormStepInputs>
        <NextButton>Submit</NextButton>
      </FormStepContent>
    </FormStep>
  );
}
