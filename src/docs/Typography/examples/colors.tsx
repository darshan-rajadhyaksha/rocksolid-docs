import { For } from "solid-js";
import Typography from "rocksolidjs/Typography";

const colors = [
  "default",
  "textPrimary",
  "textSecondary",
  "textTertiary",
  "success",
  "warning",
  "info",
  "error",
  "disabled",
] as const;

export default function Example() {
  return (
    <div class="flex flex-col gap-2">
      <For each={colors}>
        {(color) => (
          <Typography color={color}>
            {color}
          </Typography>
        )}
      </For>
    </div>
  );
}