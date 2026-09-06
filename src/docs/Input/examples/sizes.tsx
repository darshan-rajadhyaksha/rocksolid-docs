import Input from "rocksolidjs/Input";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Input
        size="small"
        placeholder="Small input"
        aria-label="Small input"
      />
      <Input
        size="medium"
        placeholder="Medium input"
        aria-label="Medium input"
      />
      <Input
        size="large"
        placeholder="Large input"
        aria-label="Large input"
      />
    </div>
  );
}