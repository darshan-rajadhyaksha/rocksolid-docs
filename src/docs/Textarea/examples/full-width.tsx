import Textarea from "rocksolidjs/Textarea";

export default function Example() {
  return (
    <div class="w-full">
      <Textarea
        fullWidth
        placeholder="Enter your delivery instructions..."
        aria-label="Delivery instructions"
      />
    </div>
  );
}