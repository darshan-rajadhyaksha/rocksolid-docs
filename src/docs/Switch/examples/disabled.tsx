import Label from "rocksolidjs/Label";
import Switch from "rocksolidjs/Switch";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <Switch id="disabled-off" disabled />
        <Label for="disabled-off">Disabled</Label>
      </div>
      <div class="flex items-center gap-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label for="disabled-on">Disabled and checked</Label>
      </div>
    </div>
  );
}