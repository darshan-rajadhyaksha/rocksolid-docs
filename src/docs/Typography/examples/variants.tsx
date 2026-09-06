import { For } from "solid-js";
import Typography from "rocksolidjs/Typography";

const variants = [
  { variant: "h1", label: "Heading 1" },
  { variant: "h2", label: "Heading 2" },
  { variant: "h3", label: "Heading 3" },
  { variant: "h4", label: "Heading 4" },
  { variant: "h5", label: "Heading 5" },
  { variant: "h6", label: "Heading 6" },
  { variant: "body1", label: "Body 1" },
  { variant: "body2", label: "Body 2" },
  { variant: "code", label: "const greeting = 'Hello';" },
];

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <For each={variants}>
        {(item) => (
          <Typography variant={item.variant as any}>
            {item.label}
          </Typography>
        )}
      </For>
    </div>
  );
}