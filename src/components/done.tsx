import { Button } from "./button";

interface DoneProps {
  onStartOver: () => void;
}

export function Done({ onStartOver }: DoneProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 py-8 font-sans">
      <div className="flex w-full max-w-md flex-col items-center">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-950">
          Thanks for your submission!
        </h2>
        <Button variant="primary" onClick={onStartOver} className="w-max">
          Start Over
        </Button>
      </div>
    </div>
  );
}
