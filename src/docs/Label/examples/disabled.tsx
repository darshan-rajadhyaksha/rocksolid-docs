import Input from "rocksolidjs/Input";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <div class="flex flex-col gap-1">
      <Label for="company" disabled>Company</Label>
      <Input
        id="company"
        placeholder="Enter your company"
        disabled
      />
    </div>
  );
}