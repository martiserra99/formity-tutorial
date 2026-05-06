import { useCallback, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form } from "./components/form";
import { Output } from "./components/output";

type Values = { name: string; surname: string; age: number };

export default function App() {
  const [output, setOutput] = useState<Values | null>(null);

  const onSubmit = useCallback((output: Values) => {
    setOutput(output);
  }, []);

  if (output) {
    return <Output output={output} onStartOver={() => setOutput(null)} />;
  }

  return (
    <Form
      defaultValues={{
        name: "",
        surname: "",
        age: 20,
      }}
      resolver={zodResolver(
        z.object({
          name: z.string().nonempty("Required"),
          surname: z.string().nonempty("Required"),
          age: z.number().min(18, "Min. 18").max(99, "Max. 99"),
        }),
      )}
      heading="Tell us about yourself"
      content={[
        {
          type: "columns",
          columns: [
            {
              type: "input",
              name: "name",
              label: "Name",
              placeholder: "Your name",
            },
            {
              type: "input",
              name: "surname",
              label: "Surname",
              placeholder: "Your surname",
            },
          ],
        },
        {
          type: "number",
          name: "age",
          label: "Age",
          placeholder: "Your age",
        },
      ]}
      submit="Submit"
      onSubmit={onSubmit}
    />
  );
}
