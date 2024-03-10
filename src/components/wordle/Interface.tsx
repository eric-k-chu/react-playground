import { isCharInWordle } from "@/lib/utils";
import { useWordleContext } from "./WordleContext";

const dd = true;

export function Interface() {
  const { grid, wordle, buffer } = useWordleContext();

  if (dd) {
    return (
      <div className="flex items-center gap-x-2 p-8">
        {buffer.map((char, i) => (
          <div
            className={`flex size-16 items-center justify-center ring-2 ring-neutral-500 ${isCharInWordle(wordle, char) === true ? "bg-green-400" : isCharInWordle(wordle, char) === false ? "bg-red-400" : "bg-transparent"}`}
            key={i}
          >
            <p className="text-4xl font-semibold uppercase">{char}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 p-8">
      {grid.map((arr, i) => (
        <div key={i} className="flex items-center gap-x-2">
          {arr.map((char, id) => (
            <div
              className={`flex size-16 items-center justify-center ring-2 ring-neutral-500 ${isCharInWordle(wordle, char) === true ? "bg-green-400" : isCharInWordle(wordle, char) === false ? "bg-red-400" : "bg-transparent"}`}
              key={id}
            >
              <p className="text-4xl font-semibold uppercase">{char}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}