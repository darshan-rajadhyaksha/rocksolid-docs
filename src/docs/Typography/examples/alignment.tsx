import { For } from "solid-js";
import Typography from "rocksolidjs/Typography";

const alignments = ["left", "center", "right", "justify"] as const;

export default function Example() {
  return (
    <div class="flex flex-col gap-4 w-full max-w-sm">
      <For each={alignments}>
        {(align) => (
          <Typography align={align} class="border p-2">
            {align} alignment
          </Typography>
        )}
      </For>
    </div>
  );
}