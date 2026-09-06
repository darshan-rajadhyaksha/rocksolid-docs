import Input from "rocksolidjs/Input";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <Label for="small-name" size="small">
          Name
        </Label>
        <Input
          id="small-name"
          size="small"
          placeholder="Small input"
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="medium-name" size="medium">
          Name
        </Label>
        <Input
          id="medium-name"
          size="medium"
          placeholder="Medium input"
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="large-name" size="large">
          Name
        </Label>
        <Input
          id="large-name"
          size="large"
          placeholder="Large input"
        />
      </div>
    </div>
  );
}