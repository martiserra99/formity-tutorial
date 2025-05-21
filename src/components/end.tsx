import { Button } from "./button";

interface EndProps {
  onStart: () => void;
}

export function End({ onStart }: EndProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 py-8 font-sans">
      <div className="flex w-full max-w-md flex-col items-center">
        <h2 className="mb-6 text-center text-4xl font-semibold text-white">
          Thanks for your submission!
        </h2>
        <Button variant="primary" onClick={onStart} className="max-w-max">
          Start Again
        </Button>
      </div>
    </div>
  );
}
