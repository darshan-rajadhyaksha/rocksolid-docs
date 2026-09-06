import Input from "rocksolidjs/Input";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <div class="flex flex-col gap-1">
      <Label for="username">
        Username
      </Label>
      <Input
        id="username"
        placeholder="Enter your username"
      />
    </div>
  );
}