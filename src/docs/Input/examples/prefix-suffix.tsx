import Input from "rocksolidjs/Input";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Input
        prefix="https://"
        placeholder="example.com"
        aria-label="Website"
      />
      <Input
        placeholder="0.00"
        suffix="USD"
        aria-label="Amount"
      />
      <Input
        prefix="$"
        placeholder="0.00"
        suffix="USD"
        aria-label="Price"
      />
    </div>
  );
}