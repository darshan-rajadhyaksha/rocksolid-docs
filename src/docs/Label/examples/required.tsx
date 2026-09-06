import Input from "rocksolidjs/Input";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <div class="flex flex-col gap-1">
      <Label for="email" required>
        Email address
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
      />
    </div>
  );
}