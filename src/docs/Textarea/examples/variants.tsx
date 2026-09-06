import Textarea from "rocksolidjs/Textarea";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Textarea
        variant="filled"
        placeholder="Write a detailed description..."
        aria-label="Filled textarea"
      />
      <Textarea
        variant="outlined"
        placeholder="Write a detailed description..."
        aria-label="Outlined textarea"
      />
      <Textarea
        variant="ghost"
        placeholder="Write a detailed description..."
        aria-label="Ghost textarea"
      />
    </div>
  );
}