import Textarea from "rocksolidjs/Textarea";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Textarea
        resize="none"
        placeholder="This textarea cannot be resized."
        aria-label="No resize"
      />
      <Textarea
        resize="x"
        placeholder="Resize this textarea horizontally."
        aria-label="Horizontal resize"
      />
      <Textarea
        resize="y"
        placeholder="Resize this textarea vertically."
        aria-label="Vertical resize"
      />
      <Textarea
        resize="both"
        placeholder="Resize this textarea in either direction."
        aria-label="Horizontal and vertical resize"
      />
    </div>
  );
}