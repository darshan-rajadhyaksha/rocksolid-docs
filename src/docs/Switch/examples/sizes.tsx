import Label from "rocksolidjs/Label";
import Switch from "rocksolidjs/Switch";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <Switch id="small" size="small" />
        <Label for="small">Small</Label>
      </div>
      <div class="flex items-center gap-2">
        <Switch id="medium" size="medium" />
        <Label for="medium">Medium</Label>
      </div>
      <div class="flex items-center gap-2">
        <Switch id="large" size="large" />
        <Label for="large">Large</Label>
      </div>
    </div>
  );
}