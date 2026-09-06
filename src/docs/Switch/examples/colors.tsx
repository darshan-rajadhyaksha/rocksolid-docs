import Label from "rocksolidjs/Label";
import Switch from "rocksolidjs/Switch";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <Switch id="default" color="default" defaultChecked />
        <Label for="default">Default</Label>
      </div>
      <div class="flex items-center gap-2">
        <Switch id="success" color="success" defaultChecked />
        <Label for="success">Success</Label>
      </div>
      <div class="flex items-center gap-2">
        <Switch id="warning" color="warning" defaultChecked />
        <Label for="warning">Warning</Label>
      </div>
      <div class="flex items-center gap-2">
        <Switch id="info" color="info" defaultChecked />
        <Label for="info">Info</Label>
      </div>
      <div class="flex items-center gap-2">
        <Switch id="error" color="error" defaultChecked />
        <Label for="error">Error</Label>
      </div>
    </div>
  );
}