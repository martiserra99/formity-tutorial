import { Highlight } from "prism-react-renderer";
import { cn } from "@/utils";
import { Button } from "./button";

interface Output<T> {
  output: T;
  onStart: () => void;
}

export function Output<T>({ output, onStart }: Output<T>) {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 py-8 font-sans">
      <div className="flex w-full max-w-md flex-col gap-4">
        <div className="scrollbar-hide max-h-96 w-full overflow-auto rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3">
          <Json<T> json={output} />
        </div>
        <Button type="button" variant="primary" onClick={onStart}>
          Start Again
        </Button>
      </div>
    </div>
  );
}

interface JsonProps<T> {
  json: T;
}

function Json<T>({ json }: JsonProps<T>) {
  return (
    <Highlight
      code={JSON.stringify(json, null, 2)}
      language="json"
      theme={{ plain: {}, styles: [] }}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn(
            className,
            "flex overflow-x-auto font-mono text-base leading-[170%]",
          )}
          style={style}
        >
          <code>
            {tokens.map((line, lineIndex) => (
              <div key={lineIndex} {...getLineProps({ line })}>
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
