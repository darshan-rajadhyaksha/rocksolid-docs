import Textarea from "rocksolidjs/Textarea";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Textarea
        size="small"
        placeholder="Short message"
        aria-label="Small textarea"
      />
      <Textarea
        size="medium"
        placeholder="Describe your request..."
        aria-label="Medium textarea"
      />
      <Textarea
        size="large"
        placeholder="Tell us more about your project..."
        aria-label="Large textarea"
      />
    </div>
  );
}